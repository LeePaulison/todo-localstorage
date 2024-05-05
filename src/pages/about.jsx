export const About = () => {
  return (
    <div className='max-w-[720px] mx-auto'>
      <h1 className='my-4'>About</h1>
      <p className='mb-4'>
        This is a simple To-do app built with React and Tailwind CSS. It uses React Router for routing and Local Storage
        for storing the data. The concept of the app came from the React Router tutorial on the React Router website.
        The original app is designed as a friends list app. I modified it to a To-do app. I also changed how the actions
        and loaders are handled as well as added breadcrumbs to the navigation. The app is built with the following
        technologies:
      </p>
      <ul className='list-disc list-inside mb-4'>
        <li>React</li>
        <li>React Router</li>
        <li>Tailwind CSS</li>
        <li>Local Storage</li>
      </ul>
      <p className='mb-4'>
        A REST API based resolver is used to handle CRUD (Create Read Update Delete) with the Local Storage back-end.
        React Router handles the routing to Actions and Loaders. Actions handle the Create (C), Update (U), and Delete
        (D) aspects of CRUD. The Loaders handle the Read (R) aspect of CRUD.
      </p>
      <h3>GitHub Repository: </h3>
      <a
        href='https://github.com/LeePJrAAC/todo-localstorage'
        className='text-blue-500'
        id='github-link'
        target='_blank'
        rel='noreferrer noopener'
      >
        https://github.com/LeePJrAAC/todo-localstorage
      </a>
    </div>
  );
};
