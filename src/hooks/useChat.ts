import { API_ENDPOINT } from '@/config';

export const useChat = async () => {
     // Fetch the original image
     const response = await fetch(`${API_ENDPOINT}/ai/chat?question=Förderprogramme&streaming=1`);
     if (!response.ok) {
         throw new Error("Failed to fetch data");
     }
     
     const reader = response.body?.getReader();
     if (!reader) {
         throw new Error("Failed to get reader");
     }
     
     const decoder = new TextDecoder("utf-8");
     const maxIterations = 1000; // Limit the number of iterations
     let iterationCount = 0;
     let text = '';
     
     while (true) {
         const { done, value } = await reader.read();
         if (done || iterationCount >= maxIterations) break;
         text += decoder.decode(value);
         iterationCount++;
     }
     
     // Close the stream after a certain time or number of iterations
     reader.cancel();

     return text;
};
