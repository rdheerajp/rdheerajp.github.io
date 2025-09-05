// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "publications in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "This is a web-version of my CV. You can also view the pdf.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-resources",
          title: "resources",
          description: "A list of my favorite resources compiled over several years of browsing the internet.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/resources/";
          },
        },{id: "dropdown-projects",
              title: "projects",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/projects/";
              },
            },{id: "dropdown-repos",
              title: "repos",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/repositories/";
              },
            },{id: "dropdown-books",
              title: "books",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/books/";
              },
            },{id: "books-acts-of-god",
          title: 'Acts of God',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/acts_of_god/";
            },},{id: "news-hello-world-i-was-holding-myself-back-but-here-we-go-sparkles",
          title: 'hello, world! I was holding myself back but here we go. :sparkles:',
          description: "",
          section: "News",},{id: "news-it-took-me-an-year-to-get-this-rolling-going-public-today",
          title: 'It took me an year to get this rolling. Going public today.',
          description: "",
          section: "News",},{id: "projects-cfd-solver",
          title: 'cfd solver',
          description: "simulating fluids with tensor networks",
          section: "Projects",handler: () => {
              window.location.href = "/projects/tn_cfd/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
