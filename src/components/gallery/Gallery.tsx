'use client';

import { getDate } from '@/utils/getDate';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import Masonry from 'react-masonry-css';
import { motion, AnimatePresence } from "framer-motion";

const breakpointColumnsObj = {
    default: 3,
    1024: 2,
    768: 2,
    500: 1,
};

interface CloudinaryImage {
    asset_id: string;
    secure_url: string;
    public_id: string;
    resource_type: string;
    created_at: Date;
    context: {
        custom: {
            alt: string;
            caption: string;
            location: string;
        };
    };
}

const fetchImages = async ({ pageParam = null }) => {
    const cursorParam = pageParam ? `?cursor=${pageParam}` : '';
    const res = await fetch(`/api/gallery${cursorParam}`);

    if (!res.ok) {
        throw new Error('Error al obtener imágenes');
    }

    const { data } = await res.json();
    return data;
};

const Gallery = () => {

    const {
        data,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        status,
    } = useInfiniteQuery({
        queryKey: ['images'],
        queryFn: fetchImages,
        initialPageParam: null,
        getNextPageParam: (lastPage) => lastPage.next_cursor ?? undefined,
    });

    const [direction, setDirection] = useState<"left" | "right">("right");
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const allImages: CloudinaryImage[] =
        data?.pages.flatMap((page) =>
            (page.resources as CloudinaryImage[]).filter((img) => img.resource_type === 'image')
        ) || [];

    const selectedImage = selectedIndex !== null ? allImages[selectedIndex] : null;

    const closeModal = () => setSelectedIndex(null);

    const goToNext = () => {
        if (selectedIndex !== null && selectedIndex < allImages.length - 1) {
            setDirection("right");
            setSelectedIndex(selectedIndex + 1);
        }
    };

    const goToPrev = () => {
        if (selectedIndex !== null && selectedIndex > 0) {
            setDirection("left");
            setSelectedIndex(selectedIndex - 1);
        }
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (selectedIndex === null) return;

            if (e.key === 'ArrowRight') {
                setDirection("left");
                goToNext();
            } else if (e.key === 'ArrowLeft') {
                setDirection("right");
                goToPrev();
            } else if (e.key === 'Escape') {
                closeModal();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [selectedIndex, allImages]);

    useEffect(() => {
        if (selectedIndex === null) return;

        let touchStartX: number | null = null;
        let touchEndX: number | null = null;

        const handleTouchStart = (e: TouchEvent) => {
            touchStartX = e.changedTouches[0].screenX;
        };

        const handleTouchMove = (e: TouchEvent) => {
            touchEndX = e.changedTouches[0].screenX;
        };

        const handleTouchEnd = () => {
            if (touchStartX === null || touchEndX === null) return;

            const deltaX = touchStartX - touchEndX;

            if (Math.abs(deltaX) > 50) {
                if (deltaX > 0) {
                    // deslizó a la izquierda
                    goToNext();
                } else {
                    // deslizó a la derecha
                    goToPrev();
                }
            }

            touchStartX = null;
            touchEndX = null;
        };

        const modalElement = document.getElementById('gallery-modal');
        if (modalElement) {
            modalElement.addEventListener('touchstart', handleTouchStart);
            modalElement.addEventListener('touchmove', handleTouchMove);
            modalElement.addEventListener('touchend', handleTouchEnd);
        }

        return () => {
            if (modalElement) {
                modalElement.removeEventListener('touchstart', handleTouchStart);
                modalElement.removeEventListener('touchmove', handleTouchMove);
                modalElement.removeEventListener('touchend', handleTouchEnd);
            }
        };
    }, [selectedIndex]);

    useEffect(() => {
        const handleScroll = () => {
            if (
                window.innerHeight + window.scrollY >= document.body.offsetHeight - 300 &&
                !isFetchingNextPage &&
                hasNextPage
            ) {
                fetchNextPage();
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

    if (status === 'pending') return (
        <div className='flex items-center justify-center w-full h-full bg-gray-hover text-center rounded-lg py-5 text-gray'>
            <p className='animate-pulse px-10'>Cargando fotografías...</p>
        </div>
    );
    if (status === 'error') return (
        <div className='flex items-center justify-center w-full h-full bg-gray-hover text-center rounded-lg py-5 text-gray'>
            <p className='animate-pulse px-10'>Error al cargar las fotografías, intentalo de nuevo.</p>
        </div>
    );

    return (

        <>
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="flex w-auto -ml-4"
                columnClassName="pl-4"
            >
                {data?.pages.map((page) =>
                    page.resources.map((image: any) =>
                        image.resource_type === 'image' ? (
                            <div key={image.asset_id} className="relative group cursor-pointer">
                                <img
                                    src={image.secure_url}
                                    alt={image.public_id}
                                    className="w-full rounded-lg md:mb-4 sm:mb-4 mb-6"
                                    onClick={() => {
                                        const index = allImages.findIndex((img) => img.asset_id === image.asset_id);
                                        setSelectedIndex(index);
                                    }}
                                />
                                <p className="text-white/50 bg-gray-hover text-gray text-xs backdrop-blur-sm px-2 py-1 rounded-md absolute bottom-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    {getDate(image.created_at)}
                                </p>
                            </div>
                        ) : null
                    )
                )}
            </Masonry>

            {isFetchingNextPage && (
                <div className='flex items-center justify-center w-full h-full bg-gray-hover rounded-lg text-centerpy-5 text-gray mt-4'>
                    <p className='animate-pulse px-10'>Cargando más fotografías...</p>
                </div>
            )}

            {!hasNextPage && (
                <div className='flex items-center justify-center w-full h-full bg-gray-hover rounded-lg text-center py-5 text-gray mt-4'>
                    <p className='px-10'>Has alcanzado el final de la colección de fotografías.</p>
                </div>
            )}

            {selectedImage && (
                <div
                    id="gallery-modal"
                    className="fixed max-lg:overflow-y-scroll transition-all inset-0 z-50 bg-black-900 bg-opacity-95 lg:flex items-center justify-center px-10 py-10"
                    onClick={closeModal}
                >
                    <div
                        className="rounded-lg w-full max-w-6xl lg:flex justify-center gap-4 overflow-hidden relative animate-fade-in"
                    >
                        {selectedIndex !== null && selectedIndex > 0 && (
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    goToPrev();
                                }}
                                className="text-gray max-lg:hidden bg-gray-hover hover:bg-gray-hover/80 rounded-full p-2 flex flex-col h-min my-auto"
                            >
                                <BsChevronLeft className='mr-0.5' />
                            </button>
                        )}
                        {/* Imagen ampliada */}
                        <div className="col-span-12 md:col-span-8 flex items-center justify-center bg-black"
                        onClick={(e) => e.stopPropagation()}>
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={selectedImage.asset_id}
                                    src={selectedImage.secure_url}
                                    alt="gallery image"
                                    className="rounded-xl max-w-full max-h-[80vh] object-contain"
                                    initial={{ opacity: 0, x: direction === "right" ? 100 : -100 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: direction === "right" ? -100 : 100 }}
                                    transition={{ duration: 0.3 }}
                                />
                            </AnimatePresence>
                        </div>

                        {selectedImage.context && (
                            <div onClick={(e) => e.stopPropagation()} className="bg-gray-hover transition-all my-auto md:min-w-96 lg:max-w-96 max-w-full max-lg:mx-auto max-lg:mt-6 h-fit rounded-lg p-8 flex flex-col justify-between">
                                <div>
                                    <p className="text-white/50 text-xs backdrop-blur-sm py-1 rounded-md">
                                        {getDate(selectedImage.created_at)}
                                    </p>

                                    <h2 className="text-xl font-semibold text-white">
                                        {selectedImage.context.custom.caption || 'Imagen publicada'}
                                    </h2>

                                    <p className="text-white text-xs mt-0.5">
                                        {selectedImage.context.custom.location || ''}
                                    </p>

                                    <p className='text-white/60 mt-5'>
                                        {selectedImage.context.custom.alt || ''}
                                    </p>
                                </div>
                            </div>
                        )}


                        {selectedIndex !== null && selectedIndex < allImages.length - 1 && (
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    goToNext();
                                }}
                                className="text-gray max-lg:hidden bg-gray-hover hover:bg-gray-hover/80 rounded-full p-2 flex flex-col h-min my-auto"
                            >
                                <BsChevronRight className='ml-0.5' />
                            </button>
                        )}
                    </div>

                    <div className='flex items-center justify-center mt-10 gap-x-5'>
                        {selectedIndex !== null && selectedIndex > 0 && (
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    goToPrev();
                                }}
                                className="text-gray lg:hidden bg-gray-hover hover:bg-gray-hover/80 rounded-full p-2 flex flex-col h-min"
                            >
                                <BsChevronLeft className='mr-0.5 w-10 h-10 scale-50' />
                            </button>
                        )}
                        {selectedIndex !== null && selectedIndex < allImages.length - 1 && (
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    goToNext();
                                }}
                                className="text-gray lg:hidden bg-gray-hover hover:bg-gray-hover/80 rounded-full p-2 flex flex-col h-min"
                            >
                                <BsChevronRight className='ml-0.5 w-10 h-10 scale-50' />
                            </button>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default Gallery;
