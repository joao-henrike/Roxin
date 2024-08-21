const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const ModalContent = styled.div`
  background-color: #1C0F2A;
  padding: 20px;
  border-radius: 10px;
  width: 400px;
  color: white;
  text-align: center;

  @media (max-width: 768px) {
    width: 100%;
    padding: 15px;
  }
`;

const ModalHeader = styled.h3`
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ModalTextarea = styled.textarea`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: none;
  resize: none;
  height: 100px;
  background-color: #2A1F3D;
  color: white;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    padding: 8px;
  }
`;