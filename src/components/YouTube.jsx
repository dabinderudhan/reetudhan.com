import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const CHANNELS = [
  {
    name: 'Learning With Fun by Reet Udhan',
    handle: '@LearningWithFunbyReetUdhan',
    url: 'https://www.youtube.com/@LearningWithFunbyReetUdhan',
    desc: 'Educational content making learning engaging and enjoyable for students of all ages.',
    // Replace with actual channel ID (find it at youtube.com/account_advanced)
    channelId: 'UCxxxxxxxxxxxxxxxxxxxxxxx',
  },
  {
    name: 'The Inner Mindspace',
    handle: '@TheInnerMindspace',
    url: 'https://www.youtube.com/@TheInnerMindspace',
    desc: 'Exploring mindfulness, personal growth, and the inner journey of self-discovery.',
    channelId: 'UCxxxxxxxxxxxxxxxxxxxxxxx',
  }
]

// Fallback videos if RSS fetch fails — replace with actual video IDs from each channel
const FALLBACK_VIDEOS = [
  { id: 'dQw4w9WgXcQ', title: 'Welcome to Learning With Fun', channel: 'Learning With Fun by Reet Udhan', date: '2024-12-01' },
  { id: 'dQw4w9WgXcQ', title: 'Making Education Interactive', channel: 'Learning With Fun by Reet Udhan', date: '2024-11-15' },
  { id: 'dQw4w9WgXcQ', title: 'Welcome to The Inner Mindspace', channel: 'The Inner Mindspace', date: '2024-12-10' },
  { id: 'dQw4w9WgXcQ', title: 'Finding Your Inner Peace', channel: 'The Inner Mindspace', date: '2024-11-20' },
]

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.6 }
}

export default function YouTube() {
  const [videos, setVideos] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeVideo, setActiveVideo] = useState(null)

  useEffect(() => {
    fetchVideos()
  }, [])

  async function fetchVideos() {
    try {
      const allVideos = []
      for (const channel of CHANNELS) {
        if (channel.channelId.startsWith('UC') && !channel.channelId.includes('xxx')) {
          const rssUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${channel.channelId}`
          const res = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`)
          if (res.ok) {
            const data = await res.json()
            if (data.items) {
              data.items.slice(0, 3).forEach(item => {
                const videoId = item.link?.match(/v=([^&]+)/)?.[1] || ''
                allVideos.push({
                  id: videoId,
                  title: item.title,
                  channel: channel.name,
                  date: item.pubDate?.split(' ')[0] || '',
                  thumbnail: item.thumbnail || `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`
                })
              })
            }
          }
        }
      }
      if (allVideos.length > 0) {
        setVideos(allVideos)
      } else {
        setVideos(FALLBACK_VIDEOS)
      }
    } catch {
      setVideos(FALLBACK_VIDEOS)
    }
    setLoading(false)
  }

  return (
    <section className="section" id="youtube">
      <div className="section-inner">
        <motion.div {...fadeUp}><div className="section-tag">YouTube Channels</div></motion.div>
        <motion.h2 className="section-title" {...fadeUp}>Watch & Learn</motion.h2>
        <motion.p className="section-subtitle" {...fadeUp}>
          Explore educational content and mindfulness resources on my YouTube channels.
        </motion.p>

        {/* Channel Cards */}
        <motion.div className="yt-channels" {...fadeUp}>
          {CHANNELS.map((ch, i) => (
            <div className="yt-channel-card" key={i}>
              <div className="yt-channel-icon">
                <svg viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </div>
              <div className="yt-channel-name">{ch.name}</div>
              <div className="yt-channel-desc">{ch.desc}</div>
              <a
                href={ch.url}
                target="_blank"
                rel="noopener noreferrer"
                className="yt-subscribe"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                Subscribe
              </a>
            </div>
          ))}
        </motion.div>

        {/* Latest Videos */}
        <motion.div {...fadeUp}>
          <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 24, marginBottom: 24 }}>
            Latest Videos
          </h3>
          {loading ? (
            <div className="yt-loading">Loading latest videos...</div>
          ) : (
            <div className="yt-videos-grid">
              {videos.map((video, i) => (
                <motion.div
                  className="yt-video-card"
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <div className="yt-thumbnail" onClick={() => setActiveVideo(video.id)}>
                    <img
                      src={video.thumbnail || `https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                      alt={video.title}
                      loading="lazy"
                    />
                    <div className="yt-play-btn">
                      <svg viewBox="0 0 24 24"><polygon points="5,3 19,12 5,21" /></svg>
                    </div>
                  </div>
                  <div className="yt-video-info">
                    <div className="yt-video-title">{video.title}</div>
                    <div className="yt-video-channel">{video.channel}</div>
                    <div className="yt-video-date">{video.date}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Video Modal */}
        {activeVideo && (
          <div className="yt-modal-overlay" onClick={() => setActiveVideo(null)}>
            <div className="yt-modal" onClick={e => e.stopPropagation()}>
              <button className="yt-modal-close" onClick={() => setActiveVideo(null)}>✕</button>
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="YouTube Video"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
