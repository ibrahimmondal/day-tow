"use client"
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa';

// interface PageProps {
//   params: {
//     id: string;
//   };
// }

export default function SingleBlogPage() {
  const { id } = useParams<{ id: string }>();

  const blogs = [
    {
        id: 1,
        "title": "How To Start Using Banko For Your Startup",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi blandit cursus risus at ultrices mi tempus imperdiet nulla. Odio morbi quis commodo odio. Et malesuada fames ac turpis egestas sed tempus urna. Mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a. Fringilla ut morbi tincidunt augue interdum. Ultrices in iaculis nunc sed augue lacus viverra.Erat imperdiet sed euismod nisi porta. Morbi blandit cursus risus at ultrices mi tempus imperdiet nulla. Cras sed felis eget velit aliquet sagittis. Amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue. Blandit aliquam etiam erat velit scelerisque in dictum. In hac habitasse platea dictumst vestibulum rhoncus. Molestie ac feugiat sed lectus vestibulum.",
        "tags": ["App", "Technology"],
        "image": "/image/image (9).png"
      },
      {
        id: 2,
        "title": "10 Things Nobody Told You About Banko",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi blandit cursus risus at ultrices mi tempus imperdiet nulla. Odio morbi quis commodo odio. Et malesuada fames ac turpis egestas sed tempus urna. Mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a. Fringilla ut morbi tincidunt augue interdum. Ultrices in iaculis nunc sed augue lacus viverra.Erat imperdiet sed euismod nisi porta. Morbi blandit cursus risus at ultrices mi tempus imperdiet nulla. Cras sed felis eget velit aliquet sagittis. Amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue. Blandit aliquam etiam erat velit scelerisque in dictum. In hac habitasse platea dictumst vestibulum rhoncus. Molestie ac feugiat sed lectus vestibulum.",
        "tags": ["Technology"],
        "image": "/image/image (11).png"
      },
      {
        id: 3,
        "title": "How To Start Using Banko For Your Startup",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi blandit cursus risus at ultrices mi tempus imperdiet nulla. Odio morbi quis commodo odio. Et malesuada fames ac turpis egestas sed tempus urna. Mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a. Fringilla ut morbi tincidunt augue interdum. Ultrices in iaculis nunc sed augue lacus viverra.Erat imperdiet sed euismod nisi porta. Morbi blandit cursus risus at ultrices mi tempus imperdiet nulla. Cras sed felis eget velit aliquet sagittis. Amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue. Blandit aliquam etiam erat velit scelerisque in dictum. In hac habitasse platea dictumst vestibulum rhoncus. Molestie ac feugiat sed lectus vestibulum.",
        "tags": ["App", "Product"],
        "image": "/image/image (12).png"
      },
      {
        id: 4,
        "title": "Why We Love Banko (And You Should, Too!)",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi blandit cursus risus at ultrices mi tempus imperdiet nulla. Odio morbi quis commodo odio. Et malesuada fames ac turpis egestas sed tempus urna. Mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a. Fringilla ut morbi tincidunt augue interdum. Ultrices in iaculis nunc sed augue lacus viverra.Erat imperdiet sed euismod nisi porta. Morbi blandit cursus risus at ultrices mi tempus imperdiet nulla. Cras sed felis eget velit aliquet sagittis. Amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue. Blandit aliquam etiam erat velit scelerisque in dictum. In hac habitasse platea dictumst vestibulum rhoncus. Molestie ac feugiat sed lectus vestibulum.",
        "tags": ["Product", "Technology"],
        "image": "/image/image (13).png"
      },
      {
        id: 5,
        "title": "5 Principles Of Investing",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi blandit cursus risus at ultrices mi tempus imperdiet nulla. Odio morbi quis commodo odio. Et malesuada fames ac turpis egestas sed tempus urna. Mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a. Fringilla ut morbi tincidunt augue interdum. Ultrices in iaculis nunc sed augue lacus viverra.Erat imperdiet sed euismod nisi porta. Morbi blandit cursus risus at ultrices mi tempus imperdiet nulla. Cras sed felis eget velit aliquet sagittis. Amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue. Blandit aliquam etiam erat velit scelerisque in dictum. In hac habitasse platea dictumst vestibulum rhoncus. Molestie ac feugiat sed lectus vestibulum.",
        "tags": ["App"],
        "image": "/image/image (14).png"
      },
      {
        id: 6,
        "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi blandit cursus risus at ultrices mi tempus imperdiet nulla. Odio morbi quis commodo odio. Et malesuada fames ac turpis egestas sed tempus urna. Mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a. Fringilla ut morbi tincidunt augue interdum. Ultrices in iaculis nunc sed augue lacus viverra.Erat imperdiet sed euismod nisi porta. Morbi blandit cursus risus at ultrices mi tempus imperdiet nulla. Cras sed felis eget velit aliquet sagittis. Amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue. Blandit aliquam etiam erat velit scelerisque in dictum. In hac habitasse platea dictumst vestibulum rhoncus. Molestie ac feugiat sed lectus vestibulum.",
        "tags": ["Technology"],
        "image": "/image/image (15).png"
      }
];
  const blog = blogs.find((blog) => blog.id === Number(id));

  if (!blog) {
    return <div className="text-center py-12">Blog not found</div>;
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="text-center mb-4">
        <span className="inline-block bg-green-100 text-[#5BB5A2] text-xs font-semibold px-3 py-1 rounded-full">
          App
        </span>
      </div>

      <h1 className="text-4xl font-bold text-center mb-4">{blog.title || 'Blog Title'}</h1>
      <p className="text-center text-gray-600 mb-8">Lorem ipsum dolor sit amet...</p>

      <div className="mb-10">
        <Image src={blog.image || '/image/image (6).png'} alt="Startup Payment" width={800} height={450} className="rounded-lg object-cover w-full" />
      </div>

      <div className="prose prose-lg max-w-none">
        <p>{blog.description || 'Blog description'}</p>
        {blog.tags && (
          <div className="flex flex-wrap gap-2 mt-4">
            {blog.tags.map((tag, tagIndex) => (
              <span key={tagIndex} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">{tag}</span>
            ))}
          </div>
        )}
      </div>

      <div className="mt-12 flex justify-center space-x-4">
        <span className="text-gray-500">Share article:</span>
        <a href="#" className="text-gray-500 hover:text-gray-700"><FaTwitter size={20} /></a>
        <a href="#" className="text-gray-500 hover:text-gray-700"><FaFacebookF size={20} /></a>
        <a href="#" className="text-gray-500 hover:text-gray-700"><FaInstagram size={20} /></a>
      </div>
    </div>
  );
}
