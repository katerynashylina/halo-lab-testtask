export async function initGame(playerName: string, complexity: number) {
  const url = 'https://cave-drone-server.shtoa.xyz/init';
  const data = { name: playerName, complexity: complexity };
  
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error('Failed to initialize game');
    }

    const responseData = await response.json();
    return responseData.id;
  } catch (error) {
    console.error('Error initializing game:', error);
    throw error;
  }
}

export async function getPlayerToken(playerId: number) {
  const baseURL = 'https://cave-drone-server.shtoa.xyz/token/';
  const tokenChunks = [];

  try {
    const chunkPromises = Array.from({ length: 4 }, (_, index) => {
      const url = `${baseURL}${index + 1}?id=${playerId}`;
      return fetch(url);
    });

    const responses = await Promise.all(chunkPromises);

    for (const response of responses) {
      if (!response.ok) {
        throw new Error('Failed to get player token chunk');
      }
      const responseData = await response.json();
      tokenChunks.push(responseData.chunk);
    }

    return tokenChunks.join('');
  } catch (error) {
    console.error('Error getting player token:', error);
    throw error;
  }
}

export function connectToCaveWebSocket(playerId: string, playerToken: string, onDataReceived: (data: any) => void) {
  const url = 'wss://cave-drone-server.shtoa.xyz/cave';
  const websocket = new WebSocket(url);

  websocket.onopen = function() {
    const authMessage = `player:${playerId}-${playerToken}`;
    websocket.send(authMessage);
  };

  websocket.onmessage = function(event) {
    const data = event.data;
    if (data === 'finished') {
      websocket.close();
    } else {
      onDataReceived(data);
    }
  };

  websocket.onerror = function(error) {
    console.error('WebSocket error:', error);
  };

  websocket.onclose = function(event) {
    if (event.code !== 1000) {
      console.warn('WebSocket connection closed unexpectedly');
    } else {
      console.log('WebSocket connection closed');
    }
  };
}

export async function playGame(playerName: string, complexity: number) {
  try {
    const playerId = await initGame(playerName, complexity);
    console.log('Player ID:', playerId);

    const playerToken = await getPlayerToken(playerId);
    console.log('Player Token:', playerToken);
    
    return new Promise<string[]>((resolve) => {
      const caveData: string[] = [];

      connectToCaveWebSocket(playerId, playerToken, (data) => {
        caveData.push(data);
      });

      setTimeout(() => {
        resolve(caveData);
      }, 5000);
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
}
