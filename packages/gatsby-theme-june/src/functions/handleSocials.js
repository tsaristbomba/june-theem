import React from "react";
import {
  RiInstagramFill,
  RiYoutubeFill,
  RiLinkedinBoxFill,
  RiTwitterFill,
  RiFacebookBoxFill,
} from "react-icons/ri";

export default function handleSocials(name, link) {
  switch (name) {
    case "INSTAGRAM":
      return (
        <a href={link} target="__blank" title={name} aria-label={name}>
          <RiInstagramFill />
        </a>
      );
    case "YOUTUBE":
      return (
        <a href={link} target="__blank" title={name} aria-label={name}>
          <RiYoutubeFill />
        </a>
      );
    case "TWITTER":
      return (
        <a href={link} target="__blank" title={name} aria-label={name}>
          <RiTwitterFill />
        </a>
      );
    case "LINKEDIN":
      return (
        <a href={link} target="__blank" title={name} aria-label={name}>
          <RiLinkedinBoxFill />
        </a>
      );
    case "FACEBOOK":
      return (
        <a href={link} target="__blank" title={name} aria-label={name}>
          <RiFacebookBoxFill />
        </a>
      );
    default:
      return;
  }
}
