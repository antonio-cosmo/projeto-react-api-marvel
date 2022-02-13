import Modal from 'react-modal';

import { ICharacter } from '../../types/ICharacter';
import { Description } from './Description';

interface IModalComicProps {
  isOpen: boolean;
  onRequestClose(): void;
  characterId: ICharacter;
}

export function ModalCharacter({
  isOpen,
  onRequestClose,
  characterId,
}: IModalComicProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="react-modal-content"
      overlayClassName="react-modal-overlay"
    >
      <Description characterId={characterId} />
    </Modal>
  );
}
