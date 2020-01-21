
import React, {useState} from 'react'
import 'emoji-mart/css/emoji-mart.css'
import Picker, { SKIN_TONE_MEDIUM_DARK } from 'emoji-picker-react';

export default function EmojiPicker() {
    const [chosenEmoji, setChosenEmoji] = useState(null);

    const onEmojiClick = (event, emojiObject) => {
        setChosenEmoji(emojiObject);
    }
    return (
        <div className="emoji-picker">
            <Picker className="emoji-picker" onEmojiClick={onEmojiClick} chosenEmoji={chosenEmoji} skinTone={SKIN_TONE_MEDIUM_DARK} style={{ zIndex: 1}}/>
        </div>
    )
}


// <Picker set='emojione' />
// <Picker onSelect={this.addEmoji} />
// <Picker title='Pick your emoji…' emoji='point_up' />
// <Picker style={{ position: 'absolute', bottom: '20px', right: '20px' }} />
// <Picker i18n={{ search: 'Recherche', categories: { search: 'Résultats de recherche', recent: 'Récents' } }} />