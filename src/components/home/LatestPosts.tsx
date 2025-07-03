const mockPosts = [
  {
    id: 1,
    title: "The Future of Tech: 2024 Innovations",
    summary:
      "A look at the most exciting technology trends and breakthroughs coming this year.",
    author: "Alex Morgan",
    date: "2024-06-01",
    image: "hero_converted.webp",
    category: "Tech",
  },
  {
    id: 2,
    title: "Mastering Async JavaScript Code",
    summary:
      "Learn how to handle asynchronous operations in JavaScript with practical examples.",
    author: "Jamie Lee",
    date: "2024-05-28",
    image: "hero_converted.webp",
    category: "Code",
  },
  {
    id: 3,
    title: "Design Systems: Why They Matter",
    summary:
      "Discover how design systems can streamline your workflow and improve consistency.",
    author: "Taylor Brooks",
    date: "2024-05-25",
    image: "hero_converted.webp",
    category: "Design",
  },
  {
    id: 4,
    title: "Inspire: Stories from Creative Developers",
    summary:
      "Real stories and advice from developers who turned their ideas into reality.",
    author: "Morgan Smith",
    date: "2024-05-20",
    image: "hero_converted.webp",
    category: "Inspire",
  },
  {
    id: 5,
    title: "Build Your First Fullstack App",
    summary:
      "A beginner-friendly guide to building and deploying your first fullstack project.",
    author: "Jordan Kim",
    date: "2024-05-15",
    image: "hero_converted.webp",
    category: "Build",
  },
];

export default function LatestPosts() {
  return (
    <section className="p-8">
      <h2 className="text-dark-base mb-8 text-center text-2xl font-bold">
        Latest Post
      </h2>
      <div className="flex gap-8 flex-wrap justify-center">
        {mockPosts.map((post) => (
          <div key={post.id} className="card bg-white w-96 shadow-md">
            <figure>
              <img src={post.image} alt="Shoes" />
            </figure>
            <div className="card-body">
              <div className="badge badge-md bg-gold-accent text-dark-base">
                {post.category}
              </div>
              <h2 className="card-title text-dark-base">{post.title}</h2>
              <p className="text-dark-base">{post.summary}</p>
              <div className="card-actions justify-between items-center">
                <div className="card-actions flex items-center text-muted-gray">
                  <div className="avatar">
                    <div className="w-8 rounded-full">
                      <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
                    </div>
                  </div>
                  {post.author}
                </div>
                <div className="card-actions text-muted-gray">{post.date}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
