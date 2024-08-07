import { useState, useEffect } from "react";
import { Cat, Heart, Info, Star, Paw, ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";

const catImages = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/1200px-Cat_November_2010-1a.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Kittyply_edit1.jpg/1200px-Kittyply_edit1.jpg",
];

const catFacts = [
  "Cats can jump up to six times their length.",
  "A cat's hearing is better than a dog's.",
  "Cats have over 20 vocalizations, including the purr, meow, and chirp.",
  "The first cat in space was French. She was named Felicette.",
  "Cats spend 70% of their lives sleeping.",
];

const Index = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [likes, setLikes] = useState(0);
  const [factIndex, setFactIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          setFactIndex((prevIndex) => (prevIndex + 1) % catFacts.length);
          return 0;
        }
        return Math.min(oldProgress + 1, 100);
      });
    }, 50);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % catImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + catImages.length) % catImages.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-pink-100 p-8">
      <Card className="max-w-4xl mx-auto shadow-lg">
        <CardHeader>
          <div className="flex items-center justify-center mb-4">
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Cat className="h-16 w-16 text-purple-500" />
            </motion.div>
            <CardTitle className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 ml-4">
              All About Cats
            </CardTitle>
          </div>
          <CardDescription className="text-center text-lg text-gray-600">
            Discover the fascinating world of our feline friends
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="relative overflow-hidden rounded-lg">
            <AnimatePresence initial={false}>
              <motion.img
                key={currentImageIndex}
                src={catImages[currentImageIndex]}
                alt="A cute cat"
                className="mx-auto object-cover w-full h-[400px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
            </AnimatePresence>
            <Button variant="outline" className="absolute left-2 top-1/2 transform -translate-y-1/2" onClick={prevImage}>
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" className="absolute right-2 top-1/2 transform -translate-y-1/2" onClick={nextImage}>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
          
          <Tabs defaultValue="about" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="characteristics">Characteristics</TabsTrigger>
              <TabsTrigger value="funfacts">Fun Facts</TabsTrigger>
            </TabsList>
            <TabsContent value="about">
              <p className="text-lg text-gray-700">
                Cats are fascinating creatures that have been domesticated for thousands of years. They are known for their independence, agility, and affectionate nature. With their playful antics and soothing purrs, cats have captured the hearts of millions around the world.
              </p>
            </TabsContent>
            <TabsContent value="characteristics">
              <ul className="list-none text-gray-700 space-y-2">
                <li className="flex items-center"><Star className="h-5 w-5 text-yellow-500 mr-2" /> Excellent hunters with sharp claws and teeth</li>
                <li className="flex items-center"><Star className="h-5 w-5 text-yellow-500 mr-2" /> Flexible bodies and quick reflexes</li>
                <li className="flex items-center"><Star className="h-5 w-5 text-yellow-500 mr-2" /> Keen senses, especially hearing and night vision</li>
                <li className="flex items-center"><Star className="h-5 w-5 text-yellow-500 mr-2" /> Soft fur and a variety of coat colors and patterns</li>
                <li className="flex items-center"><Star className="h-5 w-5 text-yellow-500 mr-2" /> Independent yet capable of forming strong bonds with humans</li>
              </ul>
            </TabsContent>
            <TabsContent value="funfacts">
              <ul className="list-none text-gray-700 space-y-2">
                <li className="flex items-center"><Info className="h-5 w-5 text-blue-500 mr-2" /> Cats sleep for about 70% of their lives</li>
                <li className="flex items-center"><Info className="h-5 w-5 text-blue-500 mr-2" /> A group of cats is called a "clowder"</li>
                <li className="flex items-center"><Info className="h-5 w-5 text-blue-500 mr-2" /> Cats have over 20 different vocalizations</li>
                <li className="flex items-center"><Info className="h-5 w-5 text-blue-500 mr-2" /> The first cat in space was a French cat named Felicette in 1963</li>
              </ul>
            </TabsContent>
          </Tabs>

          <div className="bg-purple-100 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2 flex items-center">
              <Paw className="h-5 w-5 mr-2 text-purple-500" />
              Cat Fact of the Moment
            </h3>
            <p className="text-gray-700">{catFacts[factIndex]}</p>
            <Progress value={progress} className="mt-2" />
          </div>
        </CardContent>
        <CardFooter className="flex justify-between items-center">
          <Button variant="outline" onClick={() => setLikes(likes + 1)}>
            <Heart className={`mr-2 h-4 w-4 ${likes > 0 ? 'text-red-500 fill-red-500' : ''}`} /> Like
          </Button>
          <motion.span 
            key={likes}
            initial={{ scale: 1.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-sm text-gray-500"
          >
            {likes} people love cats!
          </motion.span>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Index;
