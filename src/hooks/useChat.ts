'use client'
import { useQuery } from '@tanstack/react-query';
import { API_ENDPOINT } from '@/config';

export const useChat = () => {
  return useQuery({
    queryKey: ['chat'],
    queryFn: () => {
      const eventSource = new EventSource(`${API_ENDPOINT}/ai/chat?question=Förderprogramme&streaming=1`);
      
      const onData = (event: { data: string; }) => {
        // Handle incoming data here
        // For example, if the data is JSON:
        const eventData = JSON.parse(event.data);
        // Do something with the data
      };

      // Listen to the 'message' event
      eventSource.addEventListener('message', onData);

      // Return a cleanup function to close the connection when component unmounts
      return () => {
        eventSource.removeEventListener('message', onData);
        eventSource.close();
      };
    },
  });
};
