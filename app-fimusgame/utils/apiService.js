import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://localhost:3000', // URL base da sua API
  headers: {
    'Content-Type': 'application/json',
    // Adicione cabeçalhos personalizados aqui, se necessário
  },
});

export default {
  // Exemplo de função para buscar dados da API
  async fetchData() {
    try {
      const response = await apiClient.get('/api/v1'); // Caminho do endpoint da API
      return response.data; // Retorna os dados recebidos da API
    } catch (error) {
      console.error('Erro ao buscar dados da API:', error);
      throw error; // Lança o erro para que seja tratado onde esta função for utilizada
    }
  },
  
  // Outras funções para interagir com sua API podem ser adicionadas aqui
};




