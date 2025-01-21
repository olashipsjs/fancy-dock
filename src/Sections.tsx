export const Hero = () => {
  return (
    <section>
      <div className='w-full max-w-[1024px] mx-auto p-3 space-y-8 text-base leading-[1.6rem] text-gray-600'>
        <img
          src='/assets/images/hero.png'
          alt='fancy-dock-bar'
          className='object-cover h-[16rem] w-full rounded-md ring-gray-100 ring-1 md:h-[28rem] object-bottom aspect-video'
        />
        <h1 className='text-3xl font-semibold text-center text-gray-900 md:text-5xl'>
          Fancy dock bar
        </h1>
      </div>
    </section>
  );
};

export const Intro = () => {
  return (
    <section>
      <div className='w-full max-w-[1024px] mx-auto p-3 space-y-4 text-base leading-[1.6rem] text-gray-600'>
        <h2
          className='text-2xl font-semibold text-gray-900'
          id='intro'
        >
          Intro
        </h2>
        <p>
          The introduction sets the stage for understanding the application and
          its functionality. This lightweight React app demonstrates dynamic UI
          interactions using GSAP (GreenSock Animation Platform), React state
          management, and functional components. It also incorporates reusable
          design components like ArrowLeft and LineVertical, ensuring
          scalability and modularity.
        </p>
        <p>
          By offering a user-friendly interface for selecting titles and
          showcasing animations, this app serves as a practical demonstration of
          modern front-end development practices. It showcases the value of
          combining visual appeal with intuitive functionality.
        </p>
      </div>
    </section>
  );
};

export const Overview = () => {
  return (
    <section>
      <div className='w-full max-w-[1024px] mx-auto p-3 space-y-4 text-base leading-[1.6rem] text-gray-600'>
        <h2
          className='text-2xl font-semibold text-gray-900'
          id='overview'
        >
          Overview
        </h2>
        <p>
          This section delves into the app's primary functionality. The main
          objective of the app is to allow users to navigate between predefined
          titles (Intro, Overview, Identifying the problem, etc.) through an
          animated dropdown interface.
        </p>
        <h3 className='text-[19px] font-semibold text-gray-900'>
          Key Features:
        </h3>
        <div>
          <ol className='space-y-4 list-decimal'>
            <li className='space-y-2'>
              <span>
                <strong className='font-semibold text-gray-900'>
                  Dynamic Animations:{' '}
                </strong>
                Using GSAP, the app animates transitions for elements like
                height and margins when the title list is expanded or collapsed.
                This provides a polished, smooth user experience.
              </span>
            </li>
            <li className='space-y-2'>
              <span>
                <strong className='font-semibold text-gray-900'>
                  State Management:
                </strong>{' '}
                React's useState hook is employed to manage two primary states:
              </span>
              <ul className='space-y-1 list-disc'>
                <li className='space-y-2'>
                  <span>
                    <strong className='font-semibold text-gray-900'>
                      showTitles:
                    </strong>{' '}
                    Controls whether the dropdown is visible.
                  </span>
                </li>
                <li className='space-y-2'>
                  <span>
                    <strong className='font-semibold text-gray-900'>id:</strong>{' '}
                    Tracks the id in view.
                  </span>
                </li>
              </ul>
            </li>
            <li className='space-y-2'>
              <div>
                <strong className='font-semibold text-gray-900'>
                  Interactivity:
                </strong>{' '}
                Buttons within the title list dynamically update the{' '}
                <em className='py-0.5 rounded text-gray-900 leading-none px-1 bg-gray-100'>
                  id
                </em>{' '}
                while collapsing the list for a focused user experience.
              </div>
            </li>
            <li className='space-y-2'>
              <span>
                <strong className='font-semibold text-gray-900'>
                  Styling and Responsiveness:
                </strong>
              </span>
              <ul className='space-y-1 list-disc'>
                <li className='space-y-2'>
                  <span>
                    <strong className='font-semibold text-gray-900'>
                      clsx
                    </strong>{' '}
                    is used for conditional class names, ensuring clean and
                    maintainable code..
                  </span>
                </li>
                <li className='space-y-2'>
                  <span>
                    Tailwind CSS ensures responsive design, enabling smooth
                    transitions between mobile and desktop screens.
                  </span>
                </li>
              </ul>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export const Problem = () => {
  return (
    <section>
      <div className='w-full max-w-[1024px] mx-auto p-3 space-y-4 text-base leading-[1.6rem] text-gray-600'>
        <h2
          id='problem'
          className='text-2xl font-semibold text-gray-900'
        >
          Identifying the Problem
        </h2>
        <p>
          While the app demonstrates impressive functionality, it also
          highlights potential challenges and opportunities for improvement.
        </p>
        <h3 className='text-lg font-semibold text-gray-900'>Challenges:</h3>
        <ol className='space-y-4 list-decimal'>
          <li className='space-y-2'>
            <span>
              <strong className='font-semibold text-gray-900'>
                Animation Optimization:
              </strong>
            </span>
            <p>
              GSAP is a robust library, but integrating it seamlessly with
              React's virtual DOM can be tricky. Over-reliance on animations may
              result in performance bottlenecks on low-end devices.
            </p>
          </li>
          <li className='space-y-2'>
            <span>
              <strong className='font-semibold text-gray-900'>
                Accessibility Concerns:
              </strong>
            </span>
            <ul className='space-y-1 list-disc'>
              <li className='space-y-2'>
                <span>
                  The dropdown functionality doesn't yet accommodate users
                  relying on keyboard navigation or screen readers.
                </span>
              </li>
              <li className='space-y-2'>
                <span>
                  Visual indicators like hover effects might not be sufficient
                  for visually impaired users.
                </span>
              </li>
            </ul>
          </li>
          <li className='space-y-2'>
            <span>
              <strong className='font-semibold text-gray-900'>
                Scalability:
              </strong>
            </span>
            <ul className='space-y-1 list-disc'>
              <li className='space-y-2'>
                <span>
                  Hardcoding the titles array limits flexibility. For larger
                  datasets or dynamic content fetched from APIs, additional
                  handling mechanisms would be required.
                </span>
              </li>
            </ul>
          </li>
        </ol>

        <h4 className='font-semibold text-gray-900'>
          Opportunities for Improvement:
        </h4>
        <ul className='space-y-1 list-disc'>
          <li className='space-y-2'>
            <span>
              <strong className='font-semibold text-gray-900'>
                Keyboard Accessibility:
              </strong>{' '}
              Implementing ARIA roles and tabindex for improved navigation.
            </span>
          </li>
          <li className='space-y-2'>
            <span>
              <strong className='font-semibold text-gray-900'>
                Dynamic Content Handling:
              </strong>{' '}
              Integrating APIs to populate the titles dynamically, reducing
              manual intervention.
            </span>
          </li>
          <li className='space-y-2'>
            <span>
              <strong className='font-semibold text-gray-900'>
                Enhanced Animations:
              </strong>{' '}
              Leveraging GSAP timelines for more complex transitions, such as
              staggering or chaining animations.
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export const Rebrand = () => {
  return (
    <section>
      <div className='w-full max-w-[1024px] mx-auto p-3 space-y-4 text-base leading-[1.6rem] text-gray-600'>
        <h2
          id='rebrand'
          className='text-2xl font-semibold text-gray-900'
        >
          UI & Rebrand
        </h2>
        <p>
          The app's UI employs a minimalistic yet functional design, leveraging
          dark themes and rounded corners to achieve a modern look.
        </p>

        <h3 className='text-lg font-semibold text-gray-900'>
          Current Design Elements:
        </h3>
        <ol className='space-y-4 list-decimal'>
          <li className='space-y-2'>
            <span>
              <strong className='font-semibold text-gray-900'>
                Dropdown Animation:
              </strong>{' '}
              The title list expands or collapses dynamically, creating an
              engaging interactive element.
            </span>
          </li>
          <li className='space-y-2'>
            <span>
              <strong className='font-semibold text-gray-900'>
                Components:
              </strong>
            </span>
            <ul className='space-y-1 list-disc'>
              <li className='space-y-2'>
                <span>
                  <em className='py-0.5 rounded text-gray-900 leading-none px-1 bg-gray-100'>
                    ArrowLeft
                  </em>{' '}
                  and{' '}
                  <em className='py-0.5 rounded text-gray-900 leading-none px-1 bg-gray-100'>
                    LineVertical
                  </em>{' '}
                  icons are strategically placed to guide users. Buttons are
                  styled with hover effects for clarity.
                </span>
              </li>
              <li className='space-y-2'>
                <span>Buttons are styled with hover effects for clarity.</span>
              </li>
            </ul>
          </li>
          <li className='space-y-2'>
            <span>
              <strong className='font-semibold text-gray-900'>
                Typography:
              </strong>{' '}
              Tailored for readability with text-sm for titles and text-xs for
              progress indicators.
            </span>
          </li>
        </ol>
      </div>
    </section>
  );
};

export const Stack = () => {
  return (
    <section>
      <div className='w-full max-w-[1024px] mx-auto p-3 space-y-4 text-base leading-[1.6rem] text-gray-600'>
        <h2
          id='stack'
          className='text-2xl font-semibold text-gray-900'
        >
          A Stack Comparison
        </h2>
        <p>
          In this section, we analyze the stack choices and explore
          alternatives.
        </p>

        <h3 className='text-lg font-semibold text-gray-900'>Current Stack:</h3>
        <ol className='space-y-4 list-decimal'>
          <li className='space-y-2'>
            <span>
              <strong className='font-semibold text-gray-900'>React:</strong>{' '}
              Provides the foundational framework for component-based UI
              development.
            </span>
          </li>
          <li className='space-y-2'>
            <span>
              <strong className='font-semibold text-gray-900'>GSAP:</strong> A
              powerful tool for handling animations, surpassing CSS animations
              in flexibility and control.
            </span>
          </li>
          <li className='space-y-2'>
            <span>
              <strong className='font-semibold text-gray-900'>
                Tailwind CSS:
              </strong>{' '}
              Facilitates quick styling with utility-first classes, minimizing
              CSS bloat.
            </span>
          </li>
          <li className='space-y-2'>
            <span>
              <strong className='font-semibold text-gray-900'>clsx:</strong>{' '}
              Simplifies conditional class name application.
            </span>
          </li>
        </ol>

        <h4 className='font-semibold text-gray-900'>Potential Alternatives:</h4>
        <ol className='space-y-4 list-decimal'>
          <li className='space-y-2'>
            <span>
              <strong className='font-semibold text-gray-900'>
                React Alternatives:
              </strong>
            </span>
            <ul className='space-y-1 list-disc'>
              <li className='space-y-2'>
                <span>
                  <strong className='font-semibold text-gray-900'>
                    Vue.js:
                  </strong>{' '}
                  Offers two-way binding and an approachable learning curve for
                  small projects.
                </span>
              </li>
              <li className='space-y-2'>
                <span>
                  <strong className='font-semibold text-gray-900'>
                    Svelte:
                  </strong>{' '}
                  Known for its zero-runtime approach, enabling highly optimized
                  apps.
                </span>
              </li>
            </ul>
          </li>
          <li className='space-y-2'>
            <span>
              <strong className='font-semibold text-gray-900'>
                Animation Libraries:
              </strong>
            </span>
            <ul className='space-y-1 list-disc'>
              <li className='space-y-2'>
                <span>
                  <strong className='font-semibold text-gray-900'>
                    Framer Motion:
                  </strong>{' '}
                  A React-specific library that simplifies animations while
                  maintaining performance.
                </span>
              </li>
              <li className='space-y-2'>
                <span>
                  <strong className='font-semibold text-gray-900'>
                    Anime.js:
                  </strong>{' '}
                  Lightweight and versatile, ideal for basic to intermediate
                  animations.
                </span>
              </li>
            </ul>
          </li>
          <li className='space-y-2'>
            <span>
              <strong className='font-semibold text-gray-900'>
                Styling Frameworks:
              </strong>
            </span>
            <ul className='space-y-1 list-disc'>
              <li className='space-y-2'>
                <span>
                  <strong className='font-semibold text-gray-900'>
                    Chakra UI:
                  </strong>{' '}
                  Component-driven with built-in theming.
                </span>
              </li>
              <li className='space-y-2'>
                <span>
                  <strong className='font-semibold text-gray-900'>
                    Emotion:
                  </strong>{' '}
                  Offers powerful CSS-in-JS solutions for styling.
                </span>
              </li>
            </ul>
          </li>
        </ol>

        <h5 className='font-semibold text-gray-900'>Comparison Metrics:</h5>
        <ul className='space-y-1 list-disc'>
          <li className='space-y-2'>
            <span>
              <strong className='font-semibold text-gray-900'>
                Ease of Use:
              </strong>{' '}
              GSAP excels in complex animations but requires a steeper learning
              curve than Framer Motion.
            </span>
          </li>
          <li className='space-y-2'>
            <span>
              <strong className='font-semibold text-gray-900'>
                Performance:
              </strong>{' '}
              Tailwind’s utility-first approach minimizes unnecessary CSS, but
              Emotion offers scoped styling with better maintainability for
              large projects.
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export const Conclusion = () => {
  return (
    <section>
      <div className='w-full max-w-[1024px] mx-auto p-3 space-y-4 text-base leading-[1.6rem] text-gray-600'>
        <h2
          id='conclusion'
          className='text-2xl font-semibold text-gray-900'
        >
          Conclusion
        </h2>
        <p>
          This React app exemplifies a modern, lightweight approach to
          interactive UI design. By leveraging GSAP and Tailwind CSS, it creates
          a polished user experience with minimal code complexity. However,
          there are areas for growth, particularly in accessibility,
          scalability, and animation optimization.
        </p>

        <h3 className='text-lg font-semibold text-gray-900'>Key Takeaways:</h3>
        <ul className='space-y-1 list-disc'>
          <li className='space-y-2'>
            <span>
              <strong className='font-semibold text-gray-900'>
                Strengths:
              </strong>{' '}
              Smooth animations, responsive design, and modular components.
            </span>
          </li>
          <li className='space-y-2'>
            <span>
              <strong className='font-semibold text-gray-900'>
                Weaknesses:
              </strong>{' '}
              Accessibility and hardcoded content need refinement.
            </span>
          </li>
        </ul>

        <h4 className='font-semibold text-gray-900'>Future Prospects:</h4>
        <ol className='space-y-4 list-decimal'>
          <li className='space-y-2'>
            <span>
              <strong className='font-semibold text-gray-900'>
                API Integration:
              </strong>{' '}
              Dynamic content loading for scalability.
            </span>
          </li>
          <li className='space-y-2'>
            <span>
              <strong className='font-semibold text-gray-900'>
                Accessibility Improvements:
              </strong>{' '}
              Enhancing usability for all user demographics.
            </span>
          </li>
          <li className='space-y-2'>
            <span>
              <strong className='font-semibold text-gray-900'>
                Componentization:
              </strong>{' '}
              Breaking down the app further into reusable and testable
              components.
            </span>
          </li>
        </ol>
      </div>
    </section>
  );
};
