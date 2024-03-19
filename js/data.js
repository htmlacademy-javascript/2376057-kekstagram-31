import {getRandomInteger, getRandomArrayElement, getRandomIdGenerator} from './util.js';
const getRandomPhotoId = getRandomIdGenerator(1, 25);
const getRandomMessageId = getRandomIdGenerator(1, 1000);

//Создание коммента
const getComment = () => {
  const id = getRandomMessageId();
  const avatarNumber = getRandomInteger(1, 6);
  const message = [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
  ];
  const name = [
    'Соня',
    'Алиса',
    'Василий',
    'Олег',
    'Лариса',
    'Лев',
    'Надежда',
    'Любовь',
    'Вера',
    'Костя',
  ];
  return {
    id: id,
    avatar: `img/avatar-${avatarNumber}.svg`,
    message: getRandomArrayElement(message),
    name: getRandomArrayElement(name)
  };
};

// создание фото
const getPhoto = () => {
  const id = getRandomPhotoId();
  return {
    id: id,
    url: `photos/${id}.jpg`,
    description: `Мое супер фото ${id}`,
    likes: getRandomInteger(15, 200),
    comments: Array.from({ length: getRandomInteger(0, 30) }, getComment)
  };
};

const PHOTOS_COUNT = 25;

const createPhotos = () => Array.from({ length: PHOTOS_COUNT }, getPhoto);

export{createPhotos};
