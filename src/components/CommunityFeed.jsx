import React, { useState } from "react";

const CommunityFeed = () => {
  const [activities] = useState([
    { type: "new_artwork", content: "Budi menambahkan karya baru 'Fotografi Senja'" },
    { type: "new_topic", content: "Anisa memulai topik 'Teknik Dasar Melukis' di forum" },
    { type: "event", content: "Workshop Fotografi pada 15 November 2024" },
  ]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Aktivitas Komunitas</h2>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div key={index} className="p-4 bg-gray-100 rounded-lg shadow">
            <p className="text-lg">{activity.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunityFeed;
