import Modal from 'react-modal';

import { Description } from './Description';

interface IModalComicProps {
  isOpen: boolean;
  onRequestClose(): void;
  comicId: {
    id: number;
    title: string;
    description: string;
    stories: { items: { name: string }[] };
    series: { name: string };
    thumbnail: {
      path: string;
      extension: string;
    };
  };
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
