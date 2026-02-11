// TypeScript type definitions for the Generation endpoint request and response

type ProductInput = {
    // Add properties as needed for the product input
};

type GenerationRequest = {
    productInput: ProductInput;
    mode: 'awareness' | 'performance' | 'conceptual';
    speed: 'fast' | 'deep';
};

interface GenerationResponse {
    // Define response structure here
};

export type { GenerationRequest, GenerationResponse };