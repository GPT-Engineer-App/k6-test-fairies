import { Cat } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center justify-center mb-6">
          <Cat className="h-12 w-12 text-blue-500 mr-4" />
          <h1 className="text-4xl font-bold text-gray-800">All About Cats</h1>
        </div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
          alt="A cute cat"
          className="mx-auto object-cover w-full h-[400px] rounded-lg mb-6"
        />
        <div className="space-y-4">
          <p className="text-lg text-gray-700">
            Cats are fascinating creatures that have been domesticated for thousands of years. They are known for their independence, agility, and affectionate nature.
          </p>
          <h2 className="text-2xl font-semibold text-gray-800">Characteristics of Cats</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Excellent hunters with sharp claws and teeth</li>
            <li>Flexible bodies and quick reflexes</li>
            <li>Keen senses, especially hearing and night vision</li>
            <li>Soft fur and a variety of coat colors and patterns</li>
            <li>Independent yet capable of forming strong bonds with humans</li>
          </ul>
          <h2 className="text-2xl font-semibold text-gray-800">Fun Facts</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Cats sleep for about 70% of their lives</li>
            <li>A group of cats is called a "clowder"</li>
            <li>Cats have over 20 different vocalizations</li>
            <li>The first cat in space was a French cat named Felicette in 1963</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Index;
