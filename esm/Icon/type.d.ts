export interface IconProps {
    icon: 'heart' | 'star' | 'like' | 'twitter' | 'facebook' | 'instagram' | 'github' | 'google' | 'gmail' | 'medium' | 'linkedin' | 'twitch' | 'youtube' | 'reddit' | 'whatsapp' | 'close' | 'trophy' | 'coin';
    size?: 'medium' | 'large' | 'small';
    transparent?: boolean;
    half?: boolean;
    empty?: boolean;
    [props: string]: any;
}
