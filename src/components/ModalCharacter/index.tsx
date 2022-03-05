import Modal from 'react-modal';

import { ICharacter } from '../../types';
import { Description } from './Description';

interface IModalComicProps {
  isOpen: boolean;
  onRequestClose(): void;
  characterInfor: ICharacter;
  // characterId: number;
}

export function ModalCharacter({
  isOpen,
  onRequestClose,
  characterInfor,
}: IModalComicProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="react-modal-content"
      overlayClassName="react-modal-overlay"
    >
      <Description
        characterInfor={characterInfor}
        onRequestClose={onRequestClose}
      />
    </Modal>
  );
}
