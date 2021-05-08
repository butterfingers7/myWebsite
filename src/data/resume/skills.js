// TODO: Add Athletic Skills, Office Skills,
// Data Engineering, Data Science, ML Engineering, ... ?

const skills = [
  {
    title: 'Javascript',
    competency: 3,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'MS Excel',
    competency: 5,
    category: ['Tools', 'Data Analytics', 'Data Visualization', 'Product Management'],
  },
  {
    title: 'Market Research',
    competency: 3,
    category: ['Product Management'],
  },
  {
    title: 'Node.JS',
    competency: 3,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'React',
    competency: 4,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'PostgreSQL/SQLite3/SQL/AzureSQL',
    competency: 3,
    category: ['Web Development', 'Databases', 'Languages'],
  },
  {
    title: 'Redis',
    competency: 3,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'Git',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'Kubernetes',
    competency: 2,
    category: ['Tools', 'Data Engineering'],
  },
  {
    title: 'Google Cloud Platform',
    competency: 3,
    category: ['Tools', 'Data Engineering'],
  },
  {
    title: 'Jupyter',
    competency: 3,
    category: ['Data Science', 'Python', 'Data Analytics'],
  },
  {
    title: 'HTML',
    competency: 3,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Python',
    competency: 4,
    category: ['Languages', 'Python'],
  },
  {
    title: 'Django',
    competency: 3,
    category: ['Web Development'],
  },
  {
    title: 'Google Analytics',
    competency: 3,
    category: ['Tools', 'Data Analytics'],
  },
  {
    title: 'C++',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'Kotlin',
    competency: 4,
    category: ['Languages', 'Web Development'],
  },
  {
    title: 'Figma',
    competency: 3,
    category: ['UX Design', 'Tools', 'Product Management'],
  },
  {
    title: 'Sketch',
    competency: 2,
    category: ['UX Design', 'Tools', 'Product Management'],
  },
  {
    title: 'MATLAB',
    competency: 2,
    category: ['Tools'],
  },
  {
    title: 'Pandas',
    competency: 3,
    category: ['Data Engineering', 'Data Science', 'Python', 'Data Analytics'],
  },
  {
    title: 'Matplotlib',
    competency: 2,
    category: ['Data Engineering', 'Data Science', 'Python', 'Data Analytics'],
  },
  {
    title: 'Scikit-Learn',
    competency: 4,
    category: ['Data Engineering', 'Data Science', 'Python'],
  },
  {
    title: 'Hadoop',
    competency: 2,
    category: ['Data Engineering', 'Data Science'],
  },
  {
    title: 'MS Office',
    competency: 4,
    category: ['Product Management'],
  },
  {
    title: 'MS Powerpoint',
    competency: 4,
    category: ['Product Management', 'Tools'],
  },

].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
