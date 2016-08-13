import React from 'react';
import FullHeader from '../src/Main'; // This is our component
import { storiesOf } from '@kadira/storybook';

storiesOf('<FullHeader />', module)
    .add('with just title', () => (
        <FullHeader title="lyef" />
    ))
    .add('with title and subtitle', () => (
        <FullHeader title="lyef" subtitle="What is tested may never break." />
    ))
    .add('with title, subtitle and bgColor', () => (
        <FullHeader
            title="lyef"
            subtitle="What is tested may never break."
            bgColor="#3299BB"
        />
    ))
    .add('with just title, subtitle, bgColor and textColor', () => (
        <FullHeader
            title="lyef"
            subtitle="What is tested may never break."
            bgColor="#3299BB"
            textColor="#FF9900"
        />
    ))
    .add('with just title, subtitle, bgColor, textColor and font', () => (
        <FullHeader
            title="lyef"
            subtitle="What is tested may never break."
            bgColor="#96060C"
            textColor="#FF9900"
            font="cursive"
        />
    ))
    .add('with title, subtitle, bgImg', () => (
        <FullHeader
            title="lyef"
            subtitle="What is tested may never break."
            bgImg="http://www.toptenpack.com/wp-content/uploads/2016/01/ireland-full-hd-wallpaper.jpeg"
        />
    ))
    .add('with just title, subtitle and video', () => (
        <FullHeader
            title="lyef"
            subtitle="What is tested may never break."
            bgColor="#EBE9EB"
            textColor="#272727"
            video="http://callmenick.com/_development/video/full-screen-background-video/media/demo.mp4"
        />
    ));
