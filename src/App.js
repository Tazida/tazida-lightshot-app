import React, { useState } from 'react';
import HorizontalScroll from './components/HorizontalScroll';
import FileUploadModal from './components/FileUploadModal';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [attachmentCount, setAttachmentCount] = useState(0);
  const [cards] = useState([
    { title: 'Module 1', content: 'Client Name 1' },
    { title: 'Module 2', content: 'Client Name 2' },
    { title: 'Module 3', content: 'Client Name 3' },
    { title: 'Module 3', content: 'Client Name 4' },
  ]);

  const handleUploadComplete = (data) => {
    setAttachmentCount(data.count);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Document Attachment Module</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2 bg-pink-500 text-white rounded"
        >
          Upload Files
        </button>
      </div>
      
      <HorizontalScroll cards={cards} />
      
      <div className="mt-4">
        <p>Total Attachments: {attachmentCount}</p>
      </div>

      <FileUploadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onUpload={handleUploadComplete}
      />
    </div>
  );
};

export default App;