import React, { useState } from "react";

const ForumPage = () => {
  const [topics, setTopics] = useState([]);
  const [newTopic, setNewTopic] = useState("");

  const addTopic = () => {
    if (newTopic.trim()) {
      setTopics([...topics, { title: newTopic, comments: [] }]);
      setNewTopic("");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Forum Diskusi</h2>

      {/* Formulir Tambah Topik */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Mulai topik diskusi baru..."
          value={newTopic}
          onChange={(e) => setNewTopic(e.target.value)}
          className="border p-2 rounded-lg w-full mb-2"
        />
        <button onClick={addTopic} className="bg-blue-600 text-white px-4 py-2 rounded-lg">
          Tambah Topik
        </button>
      </div>

      {/* Daftar Topik */}
      <div className="space-y-4">
        {topics.map((topic, index) => (
          <div key={index} className="p-4 bg-gray-100 rounded-lg shadow">
            <h3 className="text-xl font-semibold">{topic.title}</h3>
            <p className="text-sm text-gray-600">{topic.comments.length} Komentar</p>
            <button className="text-blue-500 hover:underline mt-2">
              Lihat Detail Diskusi
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForumPage;
