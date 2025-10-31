import { Card } from "@/components/ui/card";
import { Youtube, Send } from "lucide-react";

const socialLinks = [
  { 
    name: "YouTube", 
    url: "https://youtube.com/@gofuturegames?si=Sw3_KQacN0kBXgSw",
    icon: Youtube,
    color: "from-red-500/20 to-red-600/10"
  },
  { 
    name: "VK", 
    url: "https://vk.com/phygitalru",
    icon: "🔵",
    color: "from-blue-500/20 to-blue-600/10"
  },
  { 
    name: "Telegram", 
    url: "https://t.me/myfuturesport",
    icon: Send,
    color: "from-sky-500/20 to-sky-600/10"
  },
];

export const SocialLinks = () => {
  return (
    <div className="grid grid-cols-3 gap-3">
      {socialLinks.map((social) => (
        <a 
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <Card className="relative p-4 border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_hsl(195_100%_50%/0.4)] cursor-pointer group">
            <div className={`absolute inset-0 bg-gradient-to-br ${social.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg`} />
            <div className="relative flex flex-col items-center justify-center gap-2">
              {typeof social.icon === 'string' ? (
                <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                  {social.icon}
                </span>
              ) : (
                <social.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
              )}
              <span className="text-xs font-semibold text-foreground font-display">
                {social.name}
              </span>
            </div>
          </Card>
        </a>
      ))}
    </div>
  );
};
