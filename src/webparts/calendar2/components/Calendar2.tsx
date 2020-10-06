import * as React from 'react';
import styles from './Calendar2.module.scss';
import { ICalendar2Props } from './ICalendar2Props';
import { escape } from '@microsoft/sp-lodash-subset';
import { DefaultButton, IIconProps, Label, Link, CommandBarButton } from 'office-ui-fabric-react'
import './Calendar2.css'
export default class Calendar extends React.Component<ICalendar2Props, {}> {
  public render(): React.ReactElement<ICalendar2Props> {
    const addIcon: IIconProps = { iconName: 'Add' };
    return (
      <div className={styles.calendar2}>
        <div className={styles.container}>
          <div className='header'>
            <div className='top_header'>
              <Label> {this.props.description}</Label>
              <Link>すべて表示</Link>
            </div>
            <div className='header_btn'>
              <CommandBarButton iconProps={addIcon} text="イベントの追加" />
            </div>
          </div>
          <div className='content'>
            <div className="group">
              <div className="left">
                <Label>10月10日</Label>
                <hr />
                <Label>10月17日</Label>
              </div>
              <div className="right">
                <Label>2号館3F個別空調室内機洗浄のお知らせ(案)</Label>
                <Label>10月10日(土) 8:00</Label>
              </div>
            </div>
            <div className="group">
              <div className="left">
                <Label>11月</Label>
                <hr />
                <Label>8日</Label>
              </div>
              <div className="right">
                <Label>停通知(本館変電設備) </Label>
                <Label>11月8日(日)8:00</Label>
              </div>
            </div>
          
          </div>
        </div>
      </div>
    );
  }
}
