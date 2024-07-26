//
//  RCTCalendarModule.m
//  TestProject
//
//  Created by Apple on 25/07/24.
//

#import <Foundation/Foundation.h>
#import "RCTCalendarModule.h"

@implementation RCTCalendarModule

// To export a module named RCTCalendarModule
RCT_EXPORT_MODULE(CalendarModule);

// Get device id method
RCT_EXPORT_METHOD(getMessageFromNative: (RCTResponseSenderBlock)successCallback errorCallback: (RCTResponseSenderBlock)errorCallback)
{
  @try{
    // Implement get device id logic
    NSString *msg = @ "Received message from iOS Native";
    successCallback(@[msg]);
  }
  @catch(NSException *exception){
    errorCallback(@[exception]);
  }
}



@end








//RCT_EXPORT_METHOD(createCalendarEvent:(NSString *)name location:(NSString *)location)
//{
// RCTLogInfo(@"Pretending to create an event %@ at %@", name, loca


