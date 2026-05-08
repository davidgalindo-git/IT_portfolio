'use client';

import { useState, useCallback } from 'react';

interface LivePreviewProps {
    /** The URL to embed in the iframe */
    src: string;
    /** Path to the screenshot in /public */
    screenshot?: string;
    /** Alt text for the screenshot */
    alt?: string;
    /** The hostname label shown in the fake browser bar */
    hostname?: string;
}

type PreviewState = 'idle' | 'loading' | 'ready' | 'error';

export function LivePreview({
                                src,
                                screenshot,
                                alt = 'Project preview',
                                hostname,
                            }: LivePreviewProps) {
    const [state, setState] = useState<PreviewState>('idle');

    const displayHost = hostname ?? (() => {
        try { return new URL(src).hostname; } catch { return src; }
    })();

    const launch = useCallback(() => setState('loading'), []);

    const handleKeyDown = useCallback(
        (e: React.KeyboardEvent) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                launch();
            }
        },
        [launch],
    );

    return (
        <div className="group relative w-full max-w-5xl mx-auto overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 shadow-2xl">

            {/* ── Browser chrome ── */}
            <div className="flex items-center justify-between px-4 py-3 bg-zinc-900 border-b border-zinc-800">
                {/* Traffic lights */}
                <div className="flex gap-1.5" aria-hidden>
                    <span className="w-3 h-3 rounded-full bg-zinc-700" />
                    <span className="w-3 h-3 rounded-full bg-zinc-700" />
                    <span className="w-3 h-3 rounded-full bg-zinc-700" />
                </div>

                {/* Address bar */}
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 bg-black/40 border border-zinc-800 px-3 py-1 rounded-md select-none max-w-xs truncate">
                    <LockIcon />
                    {displayHost}
                </div>

                {/* Right: open-in-new-tab link (only once live) */}
                <div className="w-16 flex justify-end">
                    {state === 'ready' && (
                        <a
                            href={src}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-zinc-500 hover:text-zinc-200 transition-colors p-1 rounded"
                            title="Open in new tab"
                        >
                            <ExternalLinkIcon />
                        </a>
                    )}
                </div>
            </div>

            {/* ── Viewport ── */}
            <div className="relative aspect-video w-full bg-black">

                {/* Screenshot / launch overlay — shown while idle or loading */}
                {state !== 'ready' && (
                    <div
                        className={[
                            'absolute inset-0 transition-opacity duration-500',
                            state === 'loading' ? 'opacity-0 pointer-events-none' : 'opacity-100',
                        ].join(' ')}
                    >
                        {/* Screenshot */}
                        {screenshot ? (
                            <img
                                src={screenshot}
                                alt={alt}
                                className="w-full h-full object-cover object-top opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-70 transition-all duration-700"
                                draggable={false}
                            />
                        ) : (
                            <div className="w-full h-full bg-gradient-to-br from-zinc-900 to-zinc-950" />
                        )}

                        {/* Dark vignette so the button always reads */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                        {/* Launch button */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                            <button
                                onClick={launch}
                                onKeyDown={handleKeyDown}
                                className="
                  group/btn flex items-center gap-2.5
                  px-6 py-3 rounded-full
                  bg-white text-black text-sm font-semibold
                  shadow-[0_0_40px_rgba(255,255,255,0.15)]
                  hover:bg-zinc-100 hover:shadow-[0_0_60px_rgba(255,255,255,0.25)]
                  active:scale-95
                  transition-all duration-200
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60
                "
                            >
                                <PlayIcon className="group-hover/btn:translate-x-0.5 transition-transform duration-150" />
                                Launch Live Preview
                            </button>

                            <p className="text-xs text-zinc-500 select-none">
                                Opens an embedded preview of{' '}
                                <span className="text-zinc-400 font-mono">{displayHost}</span>
                            </p>
                        </div>
                    </div>
                )}

                {/* Skeleton loader */}
                {state === 'loading' && (
                    <div className="absolute inset-0 flex items-center justify-center bg-zinc-950 animate-pulse">
                        <div className="flex flex-col items-center gap-3">
                            <div className="w-8 h-8 border-2 border-zinc-700 border-t-zinc-400 rounded-full animate-spin" />
                            <span className="text-xs text-zinc-500 font-mono">Connecting…</span>
                        </div>
                    </div>
                )}

                {/* Error state */}
                {state === 'error' && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-zinc-950">
                        <span className="text-zinc-400 text-sm">Failed to load preview</span>
                        <a
                            href={src}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-blue-400 hover:text-blue-300 underline underline-offset-2"
                        >
                            Open {displayHost} directly ↗
                        </a>
                    </div>
                )}

                {/* Iframe — rendered once loading starts, revealed on load */}
                {(state === 'loading' || state === 'ready') && (
                    <iframe
                        src={src}
                        title={alt}
                        allow="autoplay; clipboard-read; clipboard-write"
                        className={[
                            'w-full h-full transition-opacity duration-500',
                            state === 'ready' ? 'opacity-100' : 'opacity-0',
                        ].join(' ')}
                        onLoad={() => setState('ready')}
                        onError={() => setState('error')}
                        // Prevent the embedded page from navigating the parent
                        sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                    />
                )}
            </div>
        </div>
    );
}

/* ── Tiny icon components ── */

function PlayIcon({ className = '' }: { className?: string }) {
    return (
        <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden
            className={className}
        >
            <path d="M8 5v14l11-7z" />
        </svg>
    );
}

function LockIcon() {
    return (
        <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" aria-hidden className="opacity-50 flex-shrink-0">
            <path d="M18 8h-1V6A5 5 0 0 0 7 6v2H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2Zm-6 9a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm3.1-9H8.9V6a3.1 3.1 0 0 1 6.2 0v2Z" />
        </svg>
    );
}

function ExternalLinkIcon() {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
        </svg>
    );
}