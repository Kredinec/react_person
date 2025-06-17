// export const Person = ({ person }) => ();
export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  const getPartnerText = () => {
    if (!isMarried) return 'not married';
    const parentRole = sex === 'f' ? 'husband' : 'wife';

    return `${partnerName} is my ${parentRole}`;
  };

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {age && <p className="Person__age">I am {age}</p>}
      <p className="Person__partner">{getPartnerText()}</p>
    </section>
  );
};
