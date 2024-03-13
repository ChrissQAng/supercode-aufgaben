const Aboutus = () => {
  return (
    <section className="h-3/4 bg-gray-100 grid grid-cols-4 gap-x-10 p-10">
      <article className="flex flex-col gap-y-14">
        <h3 className="text-2xl font-bold">Who we are</h3>
        <p className="font-medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper
          accumsan turpis quis quis at. Nec, nisi dis duis urna, elit justo,
          euismod. Ultricies fermentum nibh in ut quis lacus sollicitudin proin.
          Eu sit enim ullamcorper nisl id est. A pulvinar ut fringilla vulputate
          feugiat lobortis phasellus mattis dignissim. Dapibus sed quam
          venenatis platea. Et pharetra, convallis nec volutpat. Sed id et sed
          diam. Diam leo ipsum, urna in lorem amet euismod.
        </p>
      </article>
      <article className="flex flex-col justify-center items-center gap-5 h-[480px]">
        <img
          className="w-4/5 h-[333px]"
          src="../../public/img/chair01.png"
          alt="chair"
        />
        <p className="font-bold text-center">
          Light brown chair with wooden legs
        </p>
        <p className="font-bold">$100</p>
      </article>
      <article className="flex flex-col justify-center items-center gap-5 h-[480px]">
        <img
          className="w-4/5 h-[333px]"
          src="../../public/img/chair02.png"
          alt="chair"
        />
        <p className="font-bold text-center">Black chair with long legs</p>
        <p className="font-bold">$500</p>
      </article>
      <article className="flex flex-col justify-center items-center gap-5 h-[480px]">
        <img
          className="w-4/5 h-[333px]"
          src="../../public/img/chair03.png"
          alt="chair"
        />
        <p className="font-bold text-center">
          White chair with spiral design legs
        </p>
        <p className="font-bold">$1000</p>
      </article>
    </section>
  );
};

export default Aboutus;
