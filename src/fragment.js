export const COMMENT_FRAGMENT = `
    fragment CommentParts on Commnet{
        id
        text
        user {
            username
        }
    }
`;

export const USER_FRAGMENT = `
    fragment UserParts on User{
        id
        username
    }
`;

export const FILE_FRAGMENT = `
    fragment FileParts on File {
        id
        url
    }
`;

export const FULL_POST_FRAGMENT = `
    fragment PostParts on Post {
        caption
        location
        likeCount
        
    }
`;
