//
//  ReactNativeView.swift
//  ReactClub
//
//  Created by josh.f on 14/4/19.
//  Copyright © 2019 deprogram. All rights reserved.
//

import UIKit
import React

class ReactNativeView: UIView {
    override init(frame: CGRect) {
        super.init(frame: frame)
        self.initializeReactView()
    }
    required init?(coder aDecoder: NSCoder) {
        super.init(coder: aDecoder)
        self.initializeReactView()
    }
    func initializeReactView() {
        let jsCodeLocation = URL(string:"http://localhost:8081/index.bundle?platform=ios")
        let rootView = RCTRootView(bundleURL: jsCodeLocation as URL?,
                                   moduleName: "ReactClub",
                                   initialProperties: nil,
                                   launchOptions: nil)
        rootView?.translatesAutoresizingMaskIntoConstraints = false
        self.addSubview(rootView!)
        let views: [String: UIView] = ["rootView": rootView!]
        var constraints =      NSLayoutConstraint.constraints(withVisualFormat: "V:|-0-[rootView]-0-|", options: NSLayoutConstraint.FormatOptions(rawValue: 0), metrics: nil, views: views)
        constraints += NSLayoutConstraint.constraints(withVisualFormat:   "H:|-0-[rootView]-0-|", options: NSLayoutConstraint.FormatOptions(rawValue: 0), metrics: nil, views: views)
        self.addConstraints(constraints)
        self.layoutIfNeeded()
    }
}
