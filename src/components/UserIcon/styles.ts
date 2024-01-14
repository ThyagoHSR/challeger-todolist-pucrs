import styled from 'styled-components';

export const IconContainer = styled.div`
  position: relative; /* Adicionado para posicionar o overlay */
  background-color: #5865f2;
  border-radius: 50%;
  width: 10rem;
  height: 10rem;
  overflow: hidden; /* Garante que a imagem e o overlay fiquem dentro do container */
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Estilo para a imagem dentro do container
export const IconImage = styled.img`
  width: 100%; /* Garante que a imagem preencha o container */
  height: 100%; /* Garante que a imagem preencha o container */
  object-fit: cover; /* Redimensiona a imagem mantendo a proporção */
  border-radius: 50%; /* Torna a imagem circular */
`;

// Estilo para o overlay
export const Overlay = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  font-size: 0.8rem;
  text-align: center;
  padding: 0.5rem;
`;
