import { motion } from 'framer-motion';
import Image from 'next/image';

const newspapers = [
  { name: 'NewsPapers', logo: '/newspapers/1.svg' },
  { name: 'NewsPapers', logo: '/newspapers/2.svg' },
  { name: 'NewsPapers', logo: '/newspapers/3.svg' },
  { name: 'NewsPapers', logo: '/newspapers/4.svg' },
  { name: 'NewsPapers', logo: '/newspapers/5.svg' },
  { name: 'NewsPapers', logo: '/newspapers/6.svg' },
  { name: 'NewsPapers', logo: '/newspapers/7.svg' },
  { name: 'NewsPapers', logo: '/newspapers/1.jpg' },
  { name: 'NewsPapers', logo: '/newspapers/2.jpg' },
  { name: 'NewsPapers', logo: '/newspapers/3.jpg' },
  { name: 'NewsPapers', logo: '/newspapers/4.jpg' },
  { name: 'NewsPapers', logo: '/newspapers/5.jpg' },
  { name: 'NewsPapers', logo: '/newspapers/6.jpg' },
  { name: 'NewsPapers', logo: '/newspapers/7.jpg' },
  { name: 'NewsPapers', logo: '/newspapers/8.jpg' },
  { name: 'NewsPapers', logo: '/newspapers/9.jpg' },
  { name: 'NewsPapers', logo: '/newspapers/9.jpg' },
  { name: 'NewsPapers', logo: '/newspapers/10.jpg' }
];

export const NewspapersSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-900 to-black overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">شركاؤنا من الصحف العربية</h2>
          <p className="text-gray-400 text-lg">نفخر بتعاوننا مع أكبر الصحف في العالم العربي</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {newspapers.map((newspaper, index) => (
            <motion.div
              key={newspaper.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800/50 rounded-xl p-6 flex items-center justify-center group hover:bg-gray-700/50 transition-all duration-300"
            >
              <div className="relative w-full h-24">
                <Image
                  src={newspaper.logo}
                  alt={newspaper.name}
                  fill
                  className="object-contain filter invert group-hover:invert-0 transition-all duration-300"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};