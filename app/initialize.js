import {$} from '../vendor/vendor';
import App from './components/App';

var initialData = {
  posts: [
    {
      author: 'Scott',
      title: 'Why Marionette is amazing',
      content: '...',
      id: 42,
      comments: [
        {
          author: 'Steve',
          content: '...',
          id: 56
        }
      ]
    },
    {
      author: 'Andrew',
      title: 'How to use Routers',
      content: '...',
      id: 17
    }
  ]
};

document.addEventListener('DOMContentLoaded', () => {
  const app = new App();
  app.start({initialData: initialData});
});
