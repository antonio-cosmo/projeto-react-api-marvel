import closeImg from '../../../assets/close.svg';
import { ICharacter } from '../../../types';
import { Contain } from './style';

interface IDescriptionProps {
  characterInfor: ICharacter;
  onRequestClose: () => void;
}

export function Description({
  characterInfor,
  onRequestClose,
}: IDescriptionProps) {
  return (
    <>
      {characterInfor.name && (
        <Contain imagem={characterInfor.thumbnail}>
          <div id="img" />

          <div id="infor">
            <h3>{characterInfor.name}</h3>
            <p>
              {characterInfor.description
                ? characterInfor.description
                : 'Sem descrição'}
            </p>
            <h3>Historias:</h3>
            {characterInfor.stories.items.length > 0
              ? characterInfor.stories.items.map((historia, index) => (
                  <p key={index}>{historia.name}</p>
                ))
              : 'Sem descrição'}
            <h3>Series:</h3>
            {characterInfor.series.items.length > 0
              ? characterInfor.series.items.map((serie, index) => (
                  <p key={index}>{serie.name}</p>
                ))
              : 'Sem descrição'}
          </div>
          <button type="button" onClick={onRequestClose} className="closeModal">
            <img src={closeImg} alt="Fechar modal" />
          </button>
        </Contain>
      )}
    </>
  );
}
