import React from 'react';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import FontDownloadIcon from '@material-ui/icons/FontDownload';

const NegativeOptions = () => {
    return (
        <div>
            <Chip avatar={<Avatar>M</Avatar>} label="Clickable"  />
        </div>
    );
};

export default NegativeOptions;