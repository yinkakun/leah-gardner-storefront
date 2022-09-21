import Container from '@/components/layout/container';

const Disclaimer = () => {
  return (
    <Container>
      <div className="mx-auto mb-20 flex max-w-xl flex-col gap-4 border border-orange-300 bg-white bg-opacity-50  p-4  text-center font-sans text-sm   backdrop-blur-lg">
        <h3 className="mx-auto w-fit bg-red-500 px-2 py-1 uppercase tracking-wider text-white">
          Disclaimer
        </h3>
        <p className="text-sm text-neutral-600">
          This is not the real website of Leah Gardner. This is a demo project
          for learning purpose only. The real website can be found at{' '}
          <a
            className="uppercase text-orange-600"
            target="_blank"
            href="https://leahgardner.art"
            rel="noreferrer"
          >
            Leahgardner.art
          </a>
        </p>
      </div>
    </Container>
  );
};

export default Disclaimer;
