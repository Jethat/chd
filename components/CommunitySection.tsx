"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Camera,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  GraduationCap,
  Maximize2,
  Play,
  ShoppingBag,
  Sparkles,
  Video,
  X,
} from "lucide-react";
import Reveal from "@/components/Reveal";

interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  title: string;
  titleHi: string;
  caption: string;
  tag: string;
}

const galleryPhotos: GalleryItem[] = [
  {
    id: 1,
    src: "/images/1.png",
    alt: "National Seminar on Hindi Language",
    title: "National Seminar on Hindi Language",
    titleHi: "हिंदी भाषा पर राष्ट्रीय संगोष्ठी",
    caption: "Academic delegates discussing national propagation and expansion of Hindi.",
    tag: "National Seminar",
  },
  {
    id: 2,
    src: "/images/2.png",
    alt: "Hinditarbhashi Hindi Lekhak Puraskar",
    title: "National Author Awards Ceremony",
    titleHi: "हिंदीतरभाषी लेखक पुरस्कार समारोह",
    caption: "Prestigious award ceremony honouring non-Hindi speaking Hindi scholars.",
    tag: "Award Ceremony",
  },
  {
    id: 3,
    src: "/images/3.png",
    alt: "Shivir workshop for emerging authors",
    title: "Writers' Workshop (Shivir)",
    titleHi: "नवलेखक कार्यशाला (शिविर)",
    caption: "Intensive training programmes encouraging new talent across regional centres.",
    tag: "Workshop",
  },
  {
    id: 4,
    src: "/images/5.png",
    alt: "CHD Book Exhibition and Sales",
    title: "Book Exhibition & Fair",
    titleHi: "पुस्तक प्रदर्शनी एवं बिक्री मेला",
    caption: "National book distribution promoting bilingual dictionaries and glossaries.",
    tag: "Exhibition",
  },
  {
    id: 5,
    src: "/images/6.png",
    alt: "Study Tour of Hindi Students",
    title: "Cultural Student Study Tour",
    titleHi: "हिंदी छात्र अध्ययन यात्रा",
    caption: "Exchange visits connecting Hindi students from non-Hindi speaking states.",
    tag: "Study Tour",
  },
  {
    id: 6,
    src: "/images/7.png",
    alt: "Release of Bhasha Research Journal",
    title: "Journal 'Bhasha' Volume Release",
    titleHi: "शोध पत्रिका 'भाषा' का लोकार्पण",
    caption: "Release of official peer-reviewed research quarterly by dignitaries.",
    tag: "Publication",
  },
];

interface VideoItem {
  id: string;
  youtubeId: string;
  title: string;
  titleHi: string;
  category: string;
  duration: string;
  description: string;
  fallbackThumbnail: string;
}

const featuredVideos: VideoItem[] = [
  {
    id: "intro",
    youtubeId: "hBi_Furqqe8",
    title: "Central Hindi Directorate - An Introduction",
    titleHi: "केंद्रीय हिंदी निदेशालय - एक परिचय",
    category: "Official Documentary",
    duration: "15:20",
    description: "An overview of CHD's historical journey, regional centres, and ongoing schemes for the promotion of Hindi.",
    fallbackThumbnail: "https://img.youtube.com/vi/hBi_Furqqe8/hqdefault.jpg",
  },
  {
    id: "story",
    youtubeId: "m8fMvSC-qmY",
    title: "Development of the Hindi Short Story (Part 1)",
    titleHi: "हिंदी कहानी का विकास (भाग 1)",
    category: "Literary Lecture Series",
    duration: "24:45",
    description: "In-depth literary analysis on the evolution, themes, and prominent authors of Hindi short fiction.",
    fallbackThumbnail: "https://img.youtube.com/vi/m8fMvSC-qmY/hqdefault.jpg",
  },
];

export default function CommunitySection() {
  const [activePhoto, setActivePhoto] = useState(0);
  const [isPhotoHovered, setIsPhotoHovered] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Video State: Default to first video (auto-playing in right side)
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const currentVideo = featuredVideos[activeVideoIndex];

  // Auto-advance photo gallery slider when not hovered and lightbox not open
  useEffect(() => {
    if (isPhotoHovered || lightboxIndex !== null) return;
    const interval = setInterval(() => {
      setActivePhoto((prev) => (prev + 1) % galleryPhotos.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPhotoHovered, lightboxIndex]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setLightboxIndex(null);
      }
      if (lightboxIndex !== null) {
        if (e.key === "ArrowLeft") {
          setLightboxIndex(
            (prev) =>
              prev === null
                ? null
                : (prev - 1 + galleryPhotos.length) % galleryPhotos.length
          );
        } else if (e.key === "ArrowRight") {
          setLightboxIndex(
            (prev) => (prev === null ? null : (prev + 1) % galleryPhotos.length)
          );
        }
      }
    };

    if (lightboxIndex !== null) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxIndex]);

  const nextPhoto = () => {
    setActivePhoto((prev) => (prev + 1) % galleryPhotos.length);
  };

  const prevPhoto = () => {
    setActivePhoto(
      (prev) => (prev - 1 + galleryPhotos.length) % galleryPhotos.length
    );
  };

  return (
    <section
      aria-labelledby="community-heading"
      className="relative overflow-hidden border-t border-line bg-gradient-to-b from-brand-light/40 via-white to-brand-light/30 py-14 sm:py-20 hc:border-white hc:bg-black"
    >
      {/* Background subtle ambient glows */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -left-28 top-24 size-96 rounded-full bg-brand/5 blur-3xl hc:hidden"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-28 bottom-24 size-96 rounded-full bg-amber-500/5 blur-3xl hc:hidden"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* ========================================================= */}
        {/* MAIN SECTION HEADER                                      */}
        {/* ========================================================= */}
        <Reveal className="mb-10 sm:mb-12">
          <div className="flex flex-col items-start justify-between gap-4 border-b border-line pb-6 sm:flex-row sm:items-end hc:border-white">
            <div>

              <h2
                id="community-heading"
                className="mt-2 text-[clamp(1.6rem,2.8vw,2.3rem)] font-bold leading-tight text-brand-dark hc:text-white"
              >
                Portals, Photo Gallery &amp; Video Spotlight
              </h2>
              <p className="mt-1 text-sm text-muted hc:text-neutral-300">
                Direct departmental services, event photographs, and official documentary productions.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-medium text-muted hc:text-neutral-300">
                Central Hindi Directorate · MoE
              </span>
            </div>
          </div>
        </Reveal>

        {/* ========================================================= */}
        {/* TOP: DEPARTMENT ONLINE PORTALS (3 HORIZONTAL CARDS)       */}
        {/* ========================================================= */}
        <div className="mb-12 sm:mb-14">
          <Reveal>
            <div className="mb-3.5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="grid size-6 place-items-center rounded bg-amber-500/10 text-amber-700 hc:bg-neutral-800 hc:text-white">
                  <GraduationCap size={15} />
                </span>
                <h3 className="text-xs font-bold uppercase tracking-wider text-brand-dark hc:text-white">
                  Online Services &bull; विभागीय ऑनलाइन सेवाएं
                </h3>
              </div>
              <span className="text-xs text-muted hc:text-neutral-300">
                Direct Official Portals
              </span>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5">
              {/* 1. Correspondence Course */}
              <a
                href="https://www.chd.mhrd.gov.in/onlinecc/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col justify-between rounded-xl border border-line bg-white p-4 shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:border-amber-400 hover:shadow-md hc:border-white hc:bg-neutral-950"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="grid size-9 place-items-center rounded-lg bg-amber-100 text-amber-800 transition duration-300 group-hover:scale-105 group-hover:bg-amber-500 group-hover:text-white hc:bg-neutral-800 hc:text-white">
                      <GraduationCap size={18} />
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2 py-0.5 text-[10px] font-semibold text-amber-800 hc:bg-neutral-800 hc:text-amber-300">
                      E-Learning <ArrowUpRight size={11} />
                    </span>
                  </div>
                  <h4 className="mt-3 text-sm font-bold text-ink group-hover:text-amber-900 hc:text-white">
                    Online Correspondence Course
                  </h4>
                  <p className="mt-1 text-xs text-muted hc:text-neutral-300">
                    &bull; Hindi Certificate &amp; Diploma courses in 14 languages.
                  </p>
                </div>
                <div className="mt-3 flex items-center gap-1 border-t border-line/60 pt-2 text-[11px] font-semibold text-amber-800 group-hover:underline hc:border-white hc:text-amber-300">
                  <span>Visit Course Portal</span>
                  <ExternalLink size={11} />
                </div>
              </a>

              {/* 2. Bhasha Magazine */}
              <a
                href="https://www.chd.education.gov.in/en/bhasha-varsiki-sahityamala"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col justify-between rounded-xl border border-line bg-white p-4 shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-400 hover:shadow-md hc:border-white hc:bg-neutral-950"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="grid size-9 place-items-center rounded-lg bg-emerald-100 text-emerald-800 transition duration-300 group-hover:scale-105 group-hover:bg-emerald-600 group-hover:text-white hc:bg-neutral-800 hc:text-white">
                      <BookOpen size={18} />
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-800 hc:bg-neutral-800 hc:text-emerald-300">
                      Journal <ArrowUpRight size={11} />
                    </span>
                  </div>
                  <h4 className="mt-3 text-sm font-bold text-ink group-hover:text-emerald-900 hc:text-white">
                    Online Bhasha Magazine
                  </h4>
                  <p className="mt-1 text-xs text-muted hc:text-neutral-300">
                    &bull; Quarterly research journal, Sahityamala &amp; archives.
                  </p>
                </div>
                <div className="mt-3 flex items-center gap-1 border-t border-line/60 pt-2 text-[11px] font-semibold text-emerald-800 group-hover:underline hc:border-white hc:text-emerald-300">
                  <span>Browse Magazine Issues</span>
                  <ExternalLink size={11} />
                </div>
              </a>

              {/* 3. Sales & Distribution */}
              <Link
                href="/e-cart"
                className="group relative flex flex-col justify-between rounded-xl border border-line bg-white p-4 shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-md sm:col-span-2 lg:col-span-1 hc:border-white hc:bg-neutral-950"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="grid size-9 place-items-center rounded-lg bg-brand-light text-brand transition duration-300 group-hover:scale-105 group-hover:bg-brand group-hover:text-white hc:bg-neutral-800 hc:text-white">
                      <ShoppingBag size={18} />
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-brand-light px-2 py-0.5 text-[10px] font-semibold text-brand hc:bg-neutral-800 hc:text-red-300">
                      CHD E-Cart <ArrowRight size={11} />
                    </span>
                  </div>
                  <h4 className="mt-3 text-sm font-bold text-ink group-hover:text-brand-dark hc:text-white">
                    Sales &amp; Distribution Portal
                  </h4>
                  <p className="mt-1 text-xs text-muted hc:text-neutral-300">
                    &bull; Official dictionaries, bilingual glossaries &amp; books.
                  </p>
                </div>
                <div className="mt-3 flex items-center gap-1 border-t border-line/60 pt-2 text-[11px] font-semibold text-brand group-hover:underline hc:border-white hc:text-red-300">
                  <span>Explore Catalogue &amp; Shop</span>
                  <ArrowRight size={11} />
                </div>
              </Link>
            </div>
          </Reveal>
        </div>

        {/* ========================================================= */}
        {/* MAIN ROW: LEFT (PHOTO GALLERY) & RIGHT (VIDEO GALLERY)    */}
        {/* ========================================================= */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-8 items-stretch">
          {/* ======================================================= */}
          {/* LEFT SIDE: PHOTO GALLERY (AUTO-SLIDE + ARROWS + VIEW)    */}
          {/* ======================================================= */}
          <Reveal delay={150} className="flex h-full flex-col">
            <div
              className="flex h-full flex-col justify-between rounded-2xl border border-line bg-white p-5 sm:p-6 shadow-sm transition hover:shadow-md hc:border-white hc:bg-black"
              onMouseEnter={() => setIsPhotoHovered(true)}
              onMouseLeave={() => setIsPhotoHovered(false)}
            >
              {/* Header */}
              <div className="mb-4 flex items-center justify-between border-b border-line pb-3.5 hc:border-white">
                <div className="flex items-center gap-2.5">
                  <span className="grid size-9 place-items-center rounded-xl bg-brand-light text-brand hc:bg-neutral-800 hc:text-white">
                    <Camera size={18} />
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-brand-dark hc:text-white">
                      Photo Gallery
                    </h3>
                    <p className="text-xs text-muted hc:text-neutral-300">
                      चित्र दीर्घा &bull; Auto-sliding Slideshow
                    </p>
                  </div>
                </div>

                <Link
                  href="/photo-gallery"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-brand hover:underline hc:text-yellow-300"
                >
                  View All ({galleryPhotos.length}) <ArrowRight size={12} />
                </Link>
              </div>

              {/* Main Photo Carousel Container */}
              <div className="relative flex flex-1 flex-col overflow-hidden rounded-xl border border-line bg-neutral-950 hc:border-white">
                <div
                  className="group/photo relative aspect-[16/10] w-full cursor-pointer overflow-hidden"
                  onClick={() => setLightboxIndex(activePhoto)}
                  title="Click to view full image in lightbox with slide arrows"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      setLightboxIndex(activePhoto);
                    }
                  }}
                >
                  {galleryPhotos.map((photo, index) => (
                    <div
                      key={photo.id}
                      className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === activePhoto
                        ? "opacity-100"
                        : "pointer-events-none opacity-0"
                        }`}
                      aria-hidden={index !== activePhoto}
                    >
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover transition-transform duration-700 group-hover/photo:scale-105"
                        priority={index === 0}
                      />
                      {/* Gradient Backdrop for Text Readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                      {/* Top Badges */}
                      <div className="absolute left-3 top-3 right-3 flex items-center justify-between text-white">
                        <span className="rounded-full bg-black/60 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider backdrop-blur-xs">
                          {photo.tag}
                        </span>
                        <span className="inline-flex items-center gap-1 rounded-full bg-black/60 px-2 py-0.5 text-[10px] font-medium text-white/90 backdrop-blur-xs">
                          <Maximize2 size={10} /> Click to expand
                        </span>
                      </div>

                      {/* Bottom Caption Overlay */}
                      <div className="absolute bottom-3 left-3 right-3 text-white">
                        <div className="flex items-center gap-2">
                          <span className="rounded bg-brand px-1.5 py-0.5 font-mono text-[10px] font-bold text-white">
                            {index + 1} / {galleryPhotos.length}
                          </span>
                          <h4 className="line-clamp-1 text-sm font-bold text-white">
                            {photo.title}
                          </h4>
                        </div>
                        <p className="mt-1 line-clamp-1 text-xs text-neutral-200">
                          {photo.caption}
                        </p>
                      </div>
                    </div>
                  ))}

                  {/* Left Slide Arrow */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      prevPhoto();
                    }}
                    aria-label="Previous photo"
                    className="absolute left-2.5 top-1/2 -translate-y-1/2 grid size-9 place-items-center rounded-full bg-black/60 text-white backdrop-blur-sm transition hover:bg-black/90 hover:scale-110 active:scale-95"
                  >
                    <ChevronLeft size={20} />
                  </button>

                  {/* Right Slide Arrow */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      nextPhoto();
                    }}
                    aria-label="Next photo"
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 grid size-9 place-items-center rounded-full bg-black/60 text-white backdrop-blur-sm transition hover:bg-black/90 hover:scale-110 active:scale-95"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>

                {/* Bottom Dot Controls & Click to View Indicator */}
                <div className="flex items-center justify-between border-t border-white/10 bg-black/70 px-4 py-2.5 backdrop-blur-sm">
                  <div className="flex items-center gap-1.5">
                    {galleryPhotos.map((_, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setActivePhoto(idx)}
                        aria-label={`Go to photo ${idx + 1}`}
                        className={`h-1.5 rounded-full transition-all duration-300 ${idx === activePhoto
                          ? "w-6 bg-brand"
                          : "w-1.5 bg-white/40 hover:bg-white/70"
                          }`}
                      />
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => setLightboxIndex(activePhoto)}
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-white/90 hover:text-white hover:underline"
                  >
                    <Maximize2 size={11} /> Open Lightbox &rarr;
                  </button>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="mt-4 flex items-center justify-between text-xs">
                <span className="text-muted hc:text-neutral-400">
                  Auto-playing every 4s &bull; Hover to pause
                </span>
                <Link
                  href="/photo-gallery"
                  className="font-semibold text-brand hover:underline hc:text-yellow-300"
                >
                  Explore All Archives &rarr;
                </Link>
              </div>
            </div>
          </Reveal>

          {/* ======================================================= */}
          {/* RIGHT SIDE: VIDEO GALLERY (AUTO-PLAYING FIRST VIDEO)     */}
          {/* ======================================================= */}
          <Reveal delay={250} className="flex h-full flex-col">
            <div className="flex h-full flex-col justify-between ">
              {/* Header */}
              <div className="mb-4 flex items-center justify-between border-b border-line pb-3.5 hc:border-white">
                <div className="flex items-center gap-2.5">
                  <span className="grid size-9 place-items-center rounded-xl bg-red-100 text-red-600 hc:bg-neutral-800 hc:text-white">
                    <Video size={18} />
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-brand-dark hc:text-white">
                      Video Gallery
                    </h3>
                    <p className="text-xs text-muted hc:text-neutral-300">
                      वीडियो एवं वृत्तचित्र &bull; Official Documentaries
                    </p>
                  </div>
                </div>

                <a
                  href="https://www.youtube.com/@centralhindidirectorate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-red-600 hover:text-red-800 hover:underline hc:text-yellow-300"
                >
                  <span>YouTube Channel</span>
                  <ExternalLink size={12} />
                </a>


              </div>

              {/* Featured Video Player with First Video Auto-playing (muted for browser compliance) */}
              <div className="relative flex flex-1 flex-col overflow-hidden rounded-xl border border-line bg-neutral-950 hc:border-white">

                <div className="flex  gap-4 bg-white">

                  <div className="relative aspect-[16/16] w-full overflow-hidden bg-black">
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${currentVideo.youtubeId}?autoplay=1&mute=1&playsinline=1&rel=0`}
                      title={currentVideo.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="absolute inset-0 h-full w-full border-0"
                    />
                  </div>
                  <div className="relative aspect-[16/16] w-full overflow-hidden bg-black">
                    <iframe
                      src={`https://www.youtube.com/embed/hBi_Furqqe8?si=31OJoY4tp8XMk7h_`}
                      title={currentVideo.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="absolute inset-0 h-full w-full border-0"
                    />

                  </div>
                </div>


                {/* Video Info Strip */}
                <div className="flex items-center justify-between border-t border-white/10 bg-neutral-900 px-4 py-2.5 text-xs text-white">
                  <div className="flex items-center gap-2 truncate pr-2">
                    <span className="rounded bg-red-600 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider">
                      Now Playing
                    </span>
                    <span className="truncate font-semibold">{currentVideo.title}</span>
                  </div>
                  <span className="shrink-0 text-neutral-400">
                    {currentVideo.duration}
                  </span>
                </div>
              </div>

              {/* Switchable Video Selector Buttons (Both Videos Available) */}
              <div className="mt-4 grid grid-cols-2 gap-2.5">
                {featuredVideos.map((video, idx) => {
                  const isActive = idx === activeVideoIndex;
                  return (
                    <button
                      key={video.id}
                      type="button"
                      onClick={() => setActiveVideoIndex(idx)}
                      className={`flex flex-col rounded-xl border p-2.5 text-left transition-all ${isActive
                        ? "border-red-500 bg-red-50/50 shadow-xs ring-1 ring-red-400 hc:border-white hc:bg-neutral-800"
                        : "border-line bg-white hover:border-red-300 hover:bg-slate-50 hc:border-neutral-700 hc:bg-neutral-950"
                        }`}
                    >
                      <div className="flex items-center justify-between gap-1">
                        <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-red-600 hc:text-red-400">
                          <Play size={10} className="fill-current" /> Video {idx + 1}
                        </span>
                        <span className="text-[10px] text-muted hc:text-neutral-400">
                          {video.duration}
                        </span>
                      </div>
                      <h4 className="mt-1 line-clamp-1 text-xs font-semibold text-ink hc:text-white">
                        {video.title}
                      </h4>
                      <p lang="hi" className="notranslate mt-0.5 line-clamp-1 text-[10px] text-muted hc:text-neutral-400">
                        {video.titleHi}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* ========================================================= */}
      {/* FULLSCREEN PHOTO LIGHTBOX WITH SLIDE ARROWS ON BOTH SIDES */}
      {/* ========================================================= */}
      {lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Photo Lightbox"
          className="fixed inset-0 z-50 flex flex-col justify-between bg-black/95 p-4 sm:p-6 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Top Bar with Counter & Close Button */}
          <div
            className="flex items-center justify-between text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold tracking-wider text-white backdrop-blur-sm">
                Photo {lightboxIndex + 1} of {galleryPhotos.length}
              </span>
              <h3 className="hidden text-sm font-semibold text-neutral-200 sm:block">
                {galleryPhotos[lightboxIndex].title}
              </h3>
            </div>

            <div className="flex items-center gap-3">
              <Link
                href="/photo-gallery"
                className="hidden text-xs text-neutral-300 hover:text-white hover:underline sm:inline-block"
              >
                View Full Gallery Page
              </Link>
              <button
                type="button"
                onClick={() => setLightboxIndex(null)}
                aria-label="Close photo preview"
                className="grid size-10 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/25 hover:scale-105"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Central Image Container with Slide Arrows on BOTH SIDES */}
          <div
            className="relative flex flex-1 items-center justify-center py-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Left Slide Arrow */}
            <button
              type="button"
              onClick={() =>
                setLightboxIndex(
                  (prev) =>
                    prev === null
                      ? null
                      : (prev - 1 + galleryPhotos.length) % galleryPhotos.length
                )
              }
              aria-label="Previous photo (Left arrow)"
              className="absolute left-2 sm:left-6 z-10 grid size-12 sm:size-14 place-items-center rounded-full bg-white/15 text-white backdrop-blur-md transition hover:bg-white/30 hover:scale-110 active:scale-95"
            >
              <ChevronLeft size={28} />
            </button>

            {/* Displayed Image */}
            <div className="relative h-[65vh] w-full max-w-5xl">
              <Image
                src={galleryPhotos[lightboxIndex].src}
                alt={galleryPhotos[lightboxIndex].alt}
                fill
                sizes="(max-width: 1280px) 100vw, 1200px"
                className="object-contain"
                priority
              />
            </div>

            {/* Right Slide Arrow */}
            <button
              type="button"
              onClick={() =>
                setLightboxIndex(
                  (prev) =>
                    prev === null ? null : (prev + 1) % galleryPhotos.length
                )
              }
              aria-label="Next photo (Right arrow)"
              className="absolute right-2 sm:right-6 z-10 grid size-12 sm:size-14 place-items-center rounded-full bg-white/15 text-white backdrop-blur-md transition hover:bg-white/30 hover:scale-110 active:scale-95"
            >
              <ChevronRight size={28} />
            </button>
          </div>

          {/* Bottom Bar: Title & Caption + Thumbnail Dots */}
          <div
            className="flex flex-col items-center gap-3 text-center text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <h4 className="text-base font-semibold text-white">
                {galleryPhotos[lightboxIndex].title}
              </h4>
              <p className="mt-0.5 text-xs text-neutral-300">
                {galleryPhotos[lightboxIndex].caption}
              </p>
            </div>

            {/* Thumbnail dots selector */}
            <div className="flex items-center gap-2">
              {galleryPhotos.map((photo, idx) => (
                <button
                  key={photo.id}
                  type="button"
                  onClick={() => setLightboxIndex(idx)}
                  aria-label={`Go to photo ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${idx === lightboxIndex
                    ? "w-8 bg-brand ring-2 ring-white/50"
                    : "w-2 bg-white/40 hover:bg-white/80"
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
