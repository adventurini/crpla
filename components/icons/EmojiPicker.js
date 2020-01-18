
import React from 'react'
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'

export default function EmojiPicker() {
    return (
        <div>
            {console.log('emojipicker2')}
            <Picker set='emojione' style={{ position: 'absolute', top: '230px', left: '36%', zIndex: 1 }}/>
        </div>
    )
}


// <Picker set='emojione' />
// <Picker onSelect={this.addEmoji} />
// <Picker title='Pick your emoji…' emoji='point_up' />
// <Picker style={{ position: 'absolute', bottom: '20px', right: '20px' }} />
// <Picker i18n={{ search: 'Recherche', categories: { search: 'Résultats de recherche', recent: 'Récents' } }} />