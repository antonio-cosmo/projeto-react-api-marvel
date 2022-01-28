import Modal from 'react-modal';

import { IComic } from '../../types/IComic';
import { Description } from './Description';

interface IModalComicProps {
  isOpen: boolean;
  onRequestClose(): void;
  comicId: IComic;
}

export function ModalComic({
  isOpen,
  onRequestClose,
  comicId,
}: IModalComicProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="react-modal-content"
      overlayClassName="react-modal-overlay"
    >
      <Description comicId={comicId} />
    </Modal>
  );
}
