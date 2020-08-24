import React from 'react';
import profile from '../css/Profile.module.css';

const Profile = () => {
    return(
        <div className={profile.content}>
            <div>
                <img src="https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2013/01/sunset-cliffs-panorama.jpg?fit=1600%2C607&ssl=1" alt="wall_wide_picture"/>
            </div>
            <div>avatar & description</div>
            <div>
                My posts
                <div className={profile.item}>New post</div>
                <div className={profile.item}>post1</div>
                <div className={profile.item}>post2</div>
                <div className={profile.item}>post3</div>
            </div>
        </div>
    );
}
export default Profile;