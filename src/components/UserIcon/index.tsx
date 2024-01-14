import { useState } from 'react';
import { IconContainer,IconImage,Overlay, } from './styles';


const ProfileCircleComponent: React.FC = () => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageSrc(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <IconContainer>
      {imageSrc ? (
        <IconImage src={imageSrc} alt="Profile" />
      ) : (
        <Overlay>Clique para inserir imagem</Overlay>
      )}
      <input
        type="file"
        accept="image/*"
        style={{ opacity: 0, position: 'absolute', width: '100%', height: '100%', cursor: 'pointer', objectFit: 'cover'}}
        onChange={handleImageChange}
      />
    </IconContainer>
  );
};

export default ProfileCircleComponent;