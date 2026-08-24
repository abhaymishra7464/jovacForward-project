// import "../styles/trusted.css";

// const Trusted = () => {
//   const companies = ["OpenAI", "Microsoft", "Google", "Y Combinator", "NVIDIA"];

//   return (
//     <section className="trusted">
//       <div className="container">
//         <p className="trusted-title">Trusted Technologies & Inspiration</p>

//         <div className="trusted-grid">
//           {companies.map((company, index) => (
//             <div className="trusted-card" key={index}>
//               {company}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Trusted;




import "../styles/trusted.css";

const Trusted = () => {
  const companies = ["OpenAI", "Microsoft", "Google", "Y Combinator", "NVIDIA"];

  return (
    <section className="trusted">
      <div className="container">

        <div className="trusted-heading">
          <span>02</span>
          <p>TRUSTED TECHNOLOGIES & INSPIRATION</p>
        </div>

        <div className="trusted-grid">
          {companies.map((company, index) => (
            <div className="trusted-card" key={index}>
              {company}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Trusted;