import { Meta, Story } from '@storybook/react';
import Thumbnail, {
  IThumbnailProps,
} from 'features/cards/components/Thumbnail';
import React from 'react';
import { MEDIA_TYPE } from 'shared/api/types';

export default {
  component: Thumbnail,
  title: 'tweets/Thumbnail',
} as Meta;

const Template: Story<IThumbnailProps> = (args) => <Thumbnail {...args} />;

const profileImage =
  'https://pbs.twimg.com/profile_images/1349416634688016385/5lDhbAMD_x96.jpg';

const photoSrc =
  'https://pbs.twimg.com/media/E7xAAOfVUAU01Fb?format=jpg&name=large';

export const NotImage = Template.bind({});
NotImage.args = {
  type: MEDIA_TYPE.video,
  author: {
    name: '플라피나',
    screenName: '플라피나',
    miniProfileImageURLHttps: profileImage,
  },
  media: [],
};

const imageArgs = {
  type: MEDIA_TYPE.photo,
  author: {
    name: '플라피나',
    screenName: '플라피나',
    miniProfileImageURLHttps: profileImage,
  },
};

const images = [
  { mediaURLHttps: photoSrc, type: MEDIA_TYPE.photo },
  { mediaURLHttps: photoSrc, type: MEDIA_TYPE.photo },
  { mediaURLHttps: photoSrc, type: MEDIA_TYPE.photo },
  { mediaURLHttps: photoSrc, type: MEDIA_TYPE.photo },
];

export const Image1 = Template.bind({});
Image1.args = {
  ...imageArgs,
  media: images.slice(0, 1),
};

export const Image2 = Template.bind({});
Image2.args = {
  ...imageArgs,
  media: images.slice(0, 2),
};

export const Image3 = Template.bind({});
Image3.args = {
  ...imageArgs,
  media: images.slice(0, 3),
};

export const Image4 = Template.bind({});
Image4.args = {
  ...imageArgs,
  media: images.slice(0, 4),
};
