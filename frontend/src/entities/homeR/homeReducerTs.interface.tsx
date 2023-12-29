export interface InitialStateType {
    loading: boolean,
    error: string | null,
    events: Array<EventType>,
    eventsPic: Array<EventsPicType>
}

export interface EventType {
    id: string,
    name: string,
    picture: string,
    events: Array<InEventType>
}

export interface InEventType {
    id: number,
    name: string,
    bigPic: string,
    icon: string
}

export interface EventsPicType {
    id: number,
    bgPic: string,
    pic: string,
    items: Array<string>
}