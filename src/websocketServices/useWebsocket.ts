import { Client } from '@stomp/stompjs';

export const UseWebSocket = (
  onMessageCallback: (message: any) => void,
  clintRefCallback: (ref:any)=> void,
  websocketOpenCloseCommend: string,
  clintReference?: any,
) => {
    
        // Create the WebSocket client if it doesn't exist        
        const client = new Client();
        
        if(websocketOpenCloseCommend === "openWebsocket"){
          clintRefCallback(client)
        client?.configure({ //https://apismartlabtech.sensyonsmartspaces.com/swagger-ui/index.html
          brokerURL: 'wss://testingbackend.sensyonsmartspaces.com/notification',
          onConnect: () => {
            console.log('WebSocket connected');

            client?.subscribe('/asset/notification', (message:any) => {
              console.log('Asset Message', JSON.parse(message.body));
              onMessageCallback(JSON.parse(message.body));
            });

            client.subscribe('/asset/livedetail', (message:any) => {
              console.log("livedetail Messages:",message.body);      
            });

            client.subscribe('/topic/pushmessages', (message:any) => {
              console.log("pong messages:",message.body);      
            });
          },
          debug: (str: any) => {
            console.log(new Date(), str);
          },
        });
         
        
        client?.activate();     
      
      }



      if(websocketOpenCloseCommend === "closeWebsocket"){
        console.log('WebSocket disconnected');        
        clintReference?.forceDisconnect();
        clintReference?.deactivate();        
      }  
    
 
};