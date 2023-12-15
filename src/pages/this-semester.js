import React from 'react';
import Navbar from '../components/Navbar';
import ImageSection from '../components/ImageSection';

const ThisSemester = () => {
  return (
    <div>
      <Navbar />
      <main>
        <ImageSection 
          text="“Real change, enduring change, happens one step at a time.”"
          imagePath="/section-image-semester.jpg"
        />
        {/* Rest of the content for this page */}
      </main>
    </div>
  );
};

export default ThisSemester;
