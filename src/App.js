import './App.css';
import Profile from './components/Profile';

function App() {
  // const links = [
  //   {
  //     name: 'Twitter Link',
  //     link: 'https://twitter.com/Ayobammy_',
  //     id: 'twitter-link',
  //   },
  //   { name: 'Zuri Team', link: 'https://training.zuri.team/', id: 'btn__zuri' },
  //   {
  //     name: 'Zuri Books',
  //     link: ' http://books.zuri.team',
  //     id: 'books',
  //   },
  //   {
  //     name: 'Python Books',
  //     link: 'https://books.zuri.team/python-for-beginners?ref_id=bammy',
  //     id: 'book__python',
  //   },
  //   {
  //     name: 'Background Check for Coders',
  //     link: 'https://background.zuri.team',
  //     id: 'pitch',
  //   },
  //   {
  //     name: 'Design Books',
  //     link: 'https://books.zuri.team/design-rules',
  //     id: 'book__design',
  //   },
  // ];

  return (
    <div className="app">
      <Profile />
      <section className="links"></section>
    </div>
  );
}

export default App;
